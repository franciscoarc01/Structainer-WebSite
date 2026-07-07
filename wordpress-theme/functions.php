<?php
/**
 * Structainerv Corporate Theme Functions
 *
 * @package Structainerv_Corporate
 * @version 1.0.0
 */

// Prevenir acceso directo
if (!defined('ABSPATH')) {
    exit;
}

// Definir constantes del tema
define('STRUCTAINERV_VERSION', '1.0.0');
define('STRUCTAINERV_THEME_DIR', get_template_directory());
define('STRUCTAINERV_THEME_URL', get_template_directory_uri());

/**
 * Configuración del tema
 */
function structainerv_theme_setup() {
    // Soporte para título del sitio
    add_theme_support('title-tag');

    // Soporte para logo personalizado
    add_theme_support('custom-logo');

    // Soporte para imágenes destacadas
    add_theme_support('post-thumbnails');

    // Soporte para HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
}
add_action('after_setup_theme', 'structainerv_theme_setup');

/**
 * Encolar estilos y scripts
 */
function structainerv_enqueue_assets() {
    // Remover estilos y scripts innecesarios de WordPress
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
    wp_dequeue_style('global-styles');

    // Encolar el CSS de Vite
    wp_enqueue_style(
        'structainerv-main-styles',
        STRUCTAINERV_THEME_URL . '/assets/index-ZKvDuUFk.css',
        array(),
        STRUCTAINERV_VERSION
    );

    // Encolar el JavaScript de Vite como módulo
    wp_enqueue_script(
        'structainerv-main-script',
        STRUCTAINERV_THEME_URL . '/assets/index-DJrcPKwA.js',
        array(),
        STRUCTAINERV_VERSION,
        true
    );

    // Agregar atributo type="module"
    add_filter('script_loader_tag', 'structainerv_add_module_attribute', 10, 3);

    // Pasar datos de WordPress a JavaScript
    wp_localize_script('structainerv-main-script', 'structainervData', array(
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'restUrl' => rest_url('structainerv/v1/'),
        'nonce' => wp_create_nonce('wp_rest'),
        'siteUrl' => get_site_url(),
        'siteName' => get_bloginfo('name')
    ));
}
add_action('wp_enqueue_scripts', 'structainerv_enqueue_assets');

/**
 * Agregar atributo type="module" a los scripts
 */
function structainerv_add_module_attribute($tag, $handle, $src) {
    if ('structainerv-main-script' === $handle) {
        $tag = '<script type="module" src="' . esc_url($src) . '" id="' . $handle . '-js"></script>';
    }
    return $tag;
}

/**
 * Registrar endpoint REST API para el formulario de contacto
 */
function structainerv_register_rest_routes() {
    register_rest_route('structainerv/v1', '/contact', array(
        'methods' => 'POST',
        'callback' => 'structainerv_handle_contact_form',
        'permission_callback' => '__return_true',
        'args' => array(
            'name' => array(
                'required' => true,
                'validate_callback' => function($param) {
                    return !empty($param);
                },
                'sanitize_callback' => 'sanitize_text_field'
            ),
            'company' => array(
                'required' => true,
                'validate_callback' => function($param) {
                    return !empty($param);
                },
                'sanitize_callback' => 'sanitize_text_field'
            ),
            'email' => array(
                'required' => true,
                'validate_callback' => function($param) {
                    return is_email($param);
                },
                'sanitize_callback' => 'sanitize_email'
            ),
            'phone' => array(
                'required' => true,
                'validate_callback' => function($param) {
                    return !empty($param);
                },
                'sanitize_callback' => 'sanitize_text_field'
            ),
            'projectType' => array(
                'required' => true,
                'validate_callback' => function($param) {
                    return !empty($param);
                },
                'sanitize_callback' => 'sanitize_text_field'
            ),
            'message' => array(
                'required' => true,
                'validate_callback' => function($param) {
                    return !empty($param);
                },
                'sanitize_callback' => 'sanitize_textarea_field'
            )
        )
    ));
}
add_action('rest_api_init', 'structainerv_register_rest_routes');

/**
 * Manejar el envío del formulario de contacto
 */
function structainerv_handle_contact_form($request) {
    $name = $request->get_param('name');
    $company = $request->get_param('company');
    $email = $request->get_param('email');
    $phone = $request->get_param('phone');
    $projectType = $request->get_param('projectType');
    $message = $request->get_param('message');

    // Email del administrador
    $admin_email = get_option('admin_email');

    // Asunto del email
    $subject = sprintf('[%s] Nueva consulta de %s', get_bloginfo('name'), $company);

    // Cuerpo del email
    $email_body = "Has recibido una nueva consulta desde el sitio web:\n\n";
    $email_body .= "Nombre: $name\n";
    $email_body .= "Empresa: $company\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Teléfono: $phone\n";
    $email_body .= "Tipo de Proyecto: $projectType\n\n";
    $email_body .= "Mensaje:\n$message\n\n";
    $email_body .= "---\n";
    $email_body .= "Este mensaje fue enviado desde " . get_bloginfo('url');

    // Headers del email
    $headers = array(
        'Content-Type: text/plain; charset=UTF-8',
        'From: ' . get_bloginfo('name') . ' <' . $admin_email . '>',
        'Reply-To: ' . $name . ' <' . $email . '>'
    );

    // Enviar el email
    $sent = wp_mail($admin_email, $subject, $email_body, $headers);

    if ($sent) {
        // Guardar en la base de datos
        global $wpdb;
        $table_name = $wpdb->prefix . 'structainerv_contacts';

        $wpdb->insert(
            $table_name,
            array(
                'name' => $name,
                'company' => $company,
                'email' => $email,
                'phone' => $phone,
                'project_type' => $projectType,
                'message' => $message,
                'created_at' => current_time('mysql')
            ),
            array('%s', '%s', '%s', '%s', '%s', '%s', '%s')
        );

        return new WP_REST_Response(array(
            'success' => true,
            'message' => 'Gracias por tu consulta. Nos pondremos en contacto contigo dentro de 24 horas.'
        ), 200);
    } else {
        return new WP_REST_Response(array(
            'success' => false,
            'message' => 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'
        ), 500);
    }
}

/**
 * Crear tabla en la base de datos al activar el tema
 */
function structainerv_create_database_table() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'structainerv_contacts';
    $charset_collate = $wpdb->get_charset_collate();

    $sql = "CREATE TABLE IF NOT EXISTS $table_name (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        name varchar(100) NOT NULL,
        company varchar(100) NOT NULL,
        email varchar(100) NOT NULL,
        phone varchar(50) NOT NULL,
        project_type varchar(50) NOT NULL,
        message text NOT NULL,
        created_at datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
        PRIMARY KEY  (id)
    ) $charset_collate;";

    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql);
}
add_action('after_switch_theme', 'structainerv_create_database_table');

/**
 * Remover la admin bar del frontend para usuarios no admin
 */
function structainerv_remove_admin_bar() {
    if (!current_user_can('administrator') && !is_admin()) {
        show_admin_bar(false);
    }
}
add_action('after_setup_theme', 'structainerv_remove_admin_bar');
