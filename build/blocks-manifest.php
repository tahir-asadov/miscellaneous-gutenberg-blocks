<?php
// This file is generated. Do not modify it manually.
return array(
	'box' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'miscellaneous-gutenberg-blocks/box',
		'version' => '0.1.0',
		'title' => 'Box',
		'category' => 'miscellaneous-gutenberg-blocks',
		'icon' => '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>',
		'description' => 'Box for flexbox or grid container',
		'example' => array(
			
		),
		'supports' => array(
			'interactivity' => true,
			'color' => array(
				'background' => true,
				'text' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'textAlign' => true
			),
			'background' => array(
				'backgroundImage' => true,
				'backgroundSize' => true
			),
			'shadow' => true,
			'align' => true,
			'alignWide' => true,
			'spacing' => array(
				'margin' => true,
				'padding' => true
			)
		),
		'attributes' => array(
			'width' => array(
				'type' => 'number',
				'default' => 100
			),
			'tablet_width' => array(
				'type' => 'number',
				'default' => 100
			),
			'mobile_width' => array(
				'type' => 'number',
				'default' => 100
			),
			'grow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'tablet_grow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'mobile_grow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'shrink' => array(
				'type' => 'boolean',
				'default' => false
			),
			'tablet_shrink' => array(
				'type' => 'boolean',
				'default' => false
			),
			'mobile_shrink' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'textdomain' => 'flexchild',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'flexbox' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'miscellaneous-gutenberg-blocks/flexbox',
		'version' => '0.1.0',
		'title' => 'Flexbox Container',
		'category' => 'miscellaneous-gutenberg-blocks',
		'icon' => '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z" /></svg>',
		'description' => 'Flexbox container',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'column' => array(
				'type' => 'number',
				'default' => 0
			),
			'wrap' => array(
				'type' => 'boolean',
				'default' => false
			),
			'tablet_wrap' => array(
				'type' => 'boolean',
				'default' => false
			),
			'mobile_wrap' => array(
				'type' => 'boolean',
				'default' => false
			),
			'horizontal' => array(
				'type' => 'boolean',
				'default' => true
			),
			'tablet_horizontal' => array(
				'type' => 'boolean',
				'default' => true
			),
			'mobile_horizontal' => array(
				'type' => 'boolean',
				'default' => true
			),
			'reverse' => array(
				'type' => 'boolean',
				'default' => false
			),
			'tablet_reverse' => array(
				'type' => 'boolean',
				'default' => false
			),
			'mobile_reverse' => array(
				'type' => 'boolean',
				'default' => false
			),
			'justify_content' => array(
				'type' => 'string',
				'default' => 'flex-start'
			),
			'tablet_justify_content' => array(
				'type' => 'string',
				'default' => 'flex-start'
			),
			'mobile_justify_content' => array(
				'type' => 'string',
				'default' => 'flex-start'
			),
			'align_items' => array(
				'type' => 'string',
				'default' => 'flex-start'
			),
			'tablet_align_items' => array(
				'type' => 'string',
				'default' => 'flex-start'
			),
			'mobile_align_items' => array(
				'type' => 'string',
				'default' => 'flex-start'
			)
		),
		'textdomain' => 'flexbox',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
