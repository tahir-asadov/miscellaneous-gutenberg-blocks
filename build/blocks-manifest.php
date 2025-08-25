<?php
// This file is generated. Do not modify it manually.
return array(
	'categories' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'miscellaneous-gutenberg-blocks/categories',
		'version' => '0.1.0',
		'title' => 'Categories',
		'category' => 'miscellaneous-gutenberg-blocks',
		'icon' => 'search',
		'description' => 'Categories list.',
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
			'categories' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 1,
						'name' => 'One'
					),
					array(
						'id' => 2,
						'name' => 'Two'
					),
					array(
						'id' => 3,
						'name' => 'Three'
					)
				)
			)
		),
		'textdomain' => 'miscellaneous-gutenberg-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
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
			'tabletWrap' => array(
				'type' => 'boolean',
				'default' => false
			),
			'mobileWrap' => array(
				'type' => 'boolean',
				'default' => false
			),
			'horizontal' => array(
				'type' => 'boolean',
				'default' => true
			),
			'tabletHorizontal' => array(
				'type' => 'boolean',
				'default' => true
			),
			'mobileHorizontal' => array(
				'type' => 'boolean',
				'default' => true
			),
			'reverse' => array(
				'type' => 'boolean',
				'default' => false
			),
			'tabletReverse' => array(
				'type' => 'boolean',
				'default' => false
			),
			'mobileReverse' => array(
				'type' => 'boolean',
				'default' => false
			),
			'columnGap' => array(
				'type' => 'number',
				'default' => 0
			),
			'tabletColumnGap' => array(
				'type' => 'number',
				'default' => 0
			),
			'mobileColumnGap' => array(
				'type' => 'number',
				'default' => 0
			),
			'columnGapUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'tabletColumnGapUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'mobileColumnGapUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'rowGap' => array(
				'type' => 'number',
				'default' => 0
			),
			'tabletRowGap' => array(
				'type' => 'number',
				'default' => 0
			),
			'mobileRowGap' => array(
				'type' => 'number',
				'default' => 0
			),
			'rowGapUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'tabletRowGapUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'mobileRowGapUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'justifyContent' => array(
				'type' => 'string',
				'default' => 'flex-start'
			),
			'tabletJustifyContent' => array(
				'type' => 'string',
				'default' => 'flex-start'
			),
			'mobileJustifyContent' => array(
				'type' => 'string',
				'default' => 'flex-start'
			),
			'alignItems' => array(
				'type' => 'string',
				'default' => 'flex-start'
			),
			'tabletAlignItems' => array(
				'type' => 'string',
				'default' => 'flex-start'
			),
			'mobileAlignItems' => array(
				'type' => 'string',
				'default' => 'flex-start'
			),
			'width' => array(
				'type' => 'number',
				'default' => 100
			),
			'tabletWidth' => array(
				'type' => 'number',
				'default' => 100
			),
			'mobileWidth' => array(
				'type' => 'number',
				'default' => 100
			),
			'widthUnit' => array(
				'type' => 'string',
				'default' => '%'
			),
			'tabletWidthUnit' => array(
				'type' => 'string',
				'default' => '%'
			),
			'mobileWidthUnit' => array(
				'type' => 'string',
				'default' => '%'
			),
			'grow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'tabletGrow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'mobileGrow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'shrink' => array(
				'type' => 'boolean',
				'default' => false
			),
			'tabletShrink' => array(
				'type' => 'boolean',
				'default' => false
			),
			'mobileShrink' => array(
				'type' => 'boolean',
				'default' => false
			),
			'hidden' => array(
				'type' => 'boolean',
				'default' => false
			),
			'tabletHidden' => array(
				'type' => 'boolean',
				'default' => false
			),
			'mobileHidden' => array(
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
			)
		),
		'textdomain' => 'miscellaneous-gutenberg-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
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
			'disableCSS' => array(
				'type' => 'boolean',
				'default' => false
			),
			'showCategory' => array(
				'type' => 'boolean',
				'default' => false
			),
			'showSearchIcon' => array(
				'type' => 'boolean',
				'default' => true
			),
			'searchPlaceholder' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonText' => array(
				'type' => 'string',
				'default' => ''
			),
			'categoryText' => array(
				'type' => 'string',
				'default' => ''
			),
			'height' => array(
				'type' => 'number',
				'default' => 40
			),
			'width' => array(
				'type' => 'number',
				'default' => 300
			)
		),
		'textdomain' => 'miscellaneous-gutenberg-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	)
);
