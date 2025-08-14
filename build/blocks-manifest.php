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
			'display' => array(
				'type' => 'string',
				'default' => 'block'
			),
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
			),
			'hidden' => array(
				'type' => 'boolean',
				'default' => false
			),
			'tablet_hidden' => array(
				'type' => 'boolean',
				'default' => false
			),
			'mobile_hidden' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'textdomain' => 'miscellaneous-gutenberg-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'render' => 'file:./render.php',
		'style' => 'file:./style-index.css'
	),
	'flexbox' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'miscellaneous-gutenberg-blocks/flexbox',
		'version' => '0.1.0',
		'title' => 'Flexbox',
		'category' => 'miscellaneous-gutenberg-blocks',
		'icon' => '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z" /></svg>',
		'description' => 'Flexbox container',
		'example' => array(
			
		),
		'supports' => array(
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
			'column_gap' => array(
				'type' => 'number',
				'default' => 0
			),
			'tablet_column_gap' => array(
				'type' => 'number',
				'default' => 0
			),
			'mobile_column_gap' => array(
				'type' => 'number',
				'default' => 0
			),
			'column_gap_unit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'tablet_column_gap_unit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'mobile_column_gap_unit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'row_gap' => array(
				'type' => 'number',
				'default' => 0
			),
			'tablet_row_gap' => array(
				'type' => 'number',
				'default' => 0
			),
			'mobile_row_gap' => array(
				'type' => 'number',
				'default' => 0
			),
			'row_gap_unit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'tablet_row_gap_unit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'mobile_row_gap_unit' => array(
				'type' => 'string',
				'default' => 'px'
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
			),
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
			'width_unit' => array(
				'type' => 'string',
				'default' => '%'
			),
			'tablet_width_unit' => array(
				'type' => 'string',
				'default' => '%'
			),
			'mobile_width_unit' => array(
				'type' => 'string',
				'default' => '%'
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
			),
			'hidden' => array(
				'type' => 'boolean',
				'default' => false
			),
			'tablet_hidden' => array(
				'type' => 'boolean',
				'default' => false
			),
			'mobile_hidden' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'textdomain' => 'miscellaneous-gutenberg-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'icon-and-text' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'miscellaneous-gutenberg-blocks/icon-and-text',
		'version' => '0.1.0',
		'title' => 'Icon & Text',
		'category' => 'miscellaneous-gutenberg-blocks',
		'description' => '',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
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
				'backgroundSize' => true,
				'backgroundImage' => true
			),
			'spacing' => array(
				'margin' => true,
				'padding' => true,
				'blockGap' => true
			)
		),
		'attributes' => array(
			'imageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageName' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageWidth' => array(
				'type' => 'number',
				'default' => '32'
			),
			'imageContent' => array(
				'type' => 'string',
				'default' => ''
			),
			'text' => array(
				'type' => 'string',
				'default' => ''
			),
			'reversed' => array(
				'type' => 'boolean',
				'default' => false
			),
			'tabletReversed' => array(
				'type' => 'boolean',
				'default' => false
			),
			'mobileReversed' => array(
				'type' => 'boolean',
				'default' => false
			),
			'stacked' => array(
				'type' => 'boolean',
				'default' => false
			),
			'tabletStacked' => array(
				'type' => 'boolean',
				'default' => false
			),
			'mobileStacked' => array(
				'type' => 'boolean',
				'default' => false
			),
			'gap' => array(
				'type' => 'number',
				'default' => 15
			),
			'tabletGap' => array(
				'type' => 'number',
				'default' => 15
			),
			'mobileGap' => array(
				'type' => 'number',
				'default' => 15
			),
			'svgColor' => array(
				'type' => 'string'
			)
		),
		'textdomain' => 'miscellaneous-gutenberg-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'media-and-text' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'miscellaneous-gutenberg-blocks/media-and-text',
		'version' => '0.1.0',
		'title' => 'Media & Text',
		'category' => 'miscellaneous-gutenberg-blocks',
		'description' => '',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
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
				'backgroundSize' => true,
				'backgroundImage' => true
			),
			'spacing' => array(
				'margin' => true,
				'padding' => true,
				'blockGap' => true
			)
		),
		'attributes' => array(
			'imageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageName' => array(
				'type' => 'string',
				'default' => ''
			),
			'reversed' => array(
				'type' => 'boolean',
				'default' => false
			),
			'tablet_reversed' => array(
				'type' => 'boolean',
				'default' => false
			),
			'mobile_reversed' => array(
				'type' => 'boolean',
				'default' => false
			),
			'stacked' => array(
				'type' => 'boolean',
				'default' => false
			),
			'tablet_stacked' => array(
				'type' => 'boolean',
				'default' => false
			),
			'mobile_stacked' => array(
				'type' => 'boolean',
				'default' => false
			),
			'gap' => array(
				'type' => 'number',
				'default' => 15
			),
			'tablet_gap' => array(
				'type' => 'number',
				'default' => 15
			),
			'mobile_gap' => array(
				'type' => 'number',
				'default' => 15
			),
			'disable_css' => array(
				'type' => 'boolean',
				'default' => false
			),
			'show_category' => array(
				'type' => 'boolean',
				'default' => false
			),
			'show_search_icon' => array(
				'type' => 'boolean',
				'default' => true
			),
			'button_inside' => array(
				'type' => 'boolean',
				'default' => true
			),
			'search_placeholder' => array(
				'type' => 'string',
				'default' => ''
			),
			'button_text' => array(
				'type' => 'string',
				'default' => ''
			),
			'category_text' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'miscellaneous-gutenberg-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'search' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'miscellaneous-gutenberg-blocks/search',
		'version' => '0.1.0',
		'title' => 'Search',
		'category' => 'miscellaneous-gutenberg-blocks',
		'icon' => 'search',
		'description' => 'Search using post category.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
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
				'backgroundSize' => true
			),
			'spacing' => array(
				'margin' => true,
				'padding' => true,
				'blockGap' => true
			)
		),
		'attributes' => array(
			'disable_css' => array(
				'type' => 'boolean',
				'default' => false
			),
			'show_category' => array(
				'type' => 'boolean',
				'default' => false
			),
			'show_search_icon' => array(
				'type' => 'boolean',
				'default' => true
			),
			'button_inside' => array(
				'type' => 'boolean',
				'default' => true
			),
			'search_placeholder' => array(
				'type' => 'string',
				'default' => ''
			),
			'button_text' => array(
				'type' => 'string',
				'default' => ''
			),
			'category_text' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'miscellaneous-gutenberg-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
