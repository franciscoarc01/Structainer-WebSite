<?php
/**
 * Plugin Name: Corporate Website - Structainerv
 * Plugin URI: https://structainerv.com
 * Description: Plugin de sitio web corporativo construido con React y Vite, incluye formulario de contacto funcional.
 * Version: 1.0.0
 * Author: Structainerv
 * Author URI: https://structainerv.com
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: corporate-website
 */

// Prevenir acceso directo
if (!defined('ABSPATH')) {
    exit;
}

// Definir constantes del plugin
define('CORPORATE_WEBSITE_VERSION', '1.0.0');
define('CORPORATE_WEBSITE_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('CORPORATE_WEBSITE_PLUGIN_URL', plugin_dir_url(__FILE__));

/**
 * Encolar los scripts y estilos del build de Vite
 */
function corporate_website_enqueue_scripts() {
    // Encolar el CSS
    wp_enqueue_style(
        'corporate-website-styles',
        CORPORATE_WEBSITE_PLUGIN_URL . 'assets/css/index-B_9jjHMj.css',
        array(),
        CORPORATE_WEBSITE_VERSION
    );

    // Encolar el JavaScript
    wp_enqueue_script(
        'corporate-website-script',
        CORPORATE_WEBSITE_PLUGIN_URL . 'assets/js/index-CKx4mmwv.js',
        array(),
        CORPORATE_WEBSITE_VERSION,
        array('in_footer' => false, 'strategy' => 'defer')
    );

    // Agregar atributo type="module" al script
    add_filter('script_loader_tag', function($tag, $handle) {
        if ('corporate-website-script' === $handle) {
            $tag = str_replace(' src', ' type="module" src', $tag);
        }
        return $tag;
    }, 10, 2);

    // Pasar datos de WordPress a JavaScript
    wp_localize_script('corporate-website-script', 'corporateWebsiteData', array(
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'restUrl' => rest_url('corporate-website/v1/'),
        'nonce' => wp_create_nonce('wp_rest')
    ));
}
add_action('wp_enqueue_scripts', 'corporate_website_enqueue_scripts');

/**
 * Shortcode para mostrar la aplicación
 * Uso: [corporate_website]
 */
function corporate_website_shortcode($atts) {
    $atts = shortcode_atts(array(
        'page' => 'home'
    ), $atts);

    ob_start();
    ?>
    <div id="root" data-page="<?php echo esc_attr($atts['page']); ?>"></div>
    <?php
    return ob_get_clean();
}
add_shortcode('corporate_website', 'corporate_website_shortcode');

/**
 * Registrar endpoint REST API para el formulario de contacto
 */
function corporate_website_register_rest_routes() {
    register_rest_route('corporate-website/v1', '/contact', array(
        'methods' => 'POST',
        'callback' => 'corporate_website_handle_contact_form',
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
add_action('rest_api_init', 'corporate_website_register_rest_routes');

/**
 * Manejar el envío del formulario de contacto
 */
function corporate_website_handle_contact_form($request) {
    $name = $request->get_param('name');
    $company = $request->get_param('company');
    $email = $request->get_param('email');
    $phone = $request->get_param('phone');
    $projectType = $request->get_param('projectType');
    $message = $request->get_param('message');

    // Email del administrador (cambiar por el correo real)
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
        // Guardar en la base de datos (opcional)
        global $wpdb;
        $table_name = $wpdb->prefix . 'corporate_contacts';

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
 * Crear tabla en la base de datos al activar el plugin
 */
function corporate_website_activate() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'corporate_contacts';
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

    // Guardar versión del plugin
    add_option('corporate_website_version', CORPORATE_WEBSITE_VERSION);
}
register_activation_hook(__FILE__, 'corporate_website_activate');

/**
 * Limpiar al desactivar el plugin (opcional)
 */
function corporate_website_deactivate() {
    // Aquí puedes agregar código para limpiar opciones si es necesario
    // Por ejemplo: delete_option('corporate_website_version');
}
register_deactivation_hook(__FILE__, 'corporate_website_deactivate');
