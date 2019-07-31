<?php

/*
Plugin Name: Custom Template for Eventbrite Display Images in Calendar
Plugin URI: https://github.com/alanef/display-eventbrite-template-calandar-image
Description: Custom Template for Eventbrite Display Images in Calendar
Version: 1.2
Author: alan
Author URI: https://fullworks.net
License: GPL2

No warranty, no unpaid support

v 1.2 = added a style sheet
v 1.1 = change class to avoid clashes  - added alt to image

*/

if ( ! defined( 'WPINC' ) ) {
	die;
}
add_filter( 'widget-for-eventbrite-api_template_paths', function ( $file_paths ) {
	$file_paths[40] = trailingslashit( plugin_dir_path( __FILE__ ) ) . '/templates';

	return $file_paths;

}, 90 );

add_action( 'wp_enqueue_scripts', 'wfea_image_cal_enqueue_scripts' );
function wfea_image_cal_enqueue_scripts() {
	wp_register_script( 'wfea-image-calendar', plugin_dir_url( __FILE__ ) . 'js/calendar.js', array(
		'jquery',
		'widget-for-eventbrite-api' . '-moment',
		'widget-for-eventbrite-api' . '-fullcalendar',
		'widget-for-eventbrite-api' . '-qtip'
	), '1.0', false );
	wp_register_style( 'wfea-image-calendar-style', plugin_dir_url( __FILE__ ) . 'css/style.css');
}