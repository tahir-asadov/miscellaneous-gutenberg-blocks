<?php

$classes = [];
$wrap = !empty($attributes['wrap']) && $attributes['wrap'] == 1;
$tablet_wrap = !empty($attributes['tablet_wrap']) && $attributes['tablet_wrap'] == 1;
$mobile_wrap = !empty($attributes['mobile_wrap']) && $attributes['mobile_wrap'] == 1;
$horizontal = !empty($attributes['horizontal']) && $attributes['horizontal'] == 1;
$tablet_horizontal = !empty($attributes['tablet_horizontal']) && $attributes['tablet_horizontal'] == 1;
$mobile_horizontal = !empty($attributes['mobile_horizontal']) && $attributes['mobile_horizontal'] == 1;
$reverse = !empty($attributes['reverse']) && $attributes['reverse'] == 1;
$tablet_reverse = !empty($attributes['tablet_reverse']) && $attributes['tablet_reverse'] == 1;
$mobile_reverse = !empty($attributes['mobile_reverse']) && $attributes['mobile_reverse'] == 1;
$justify_content = !empty($attributes['justify_content']) ? $attributes['justify_content'] : '';
$tablet_justify_content = !empty($attributes['tablet_justify_content']) ? $attributes['tablet_justify_content'] : '';
$mobile_justify_content = !empty($attributes['mobile_justify_content']) ? $attributes['mobile_justify_content'] : '';
$align_items = !empty($attributes['align_items']) ? $attributes['align_items'] : '';
$tablet_align_items = !empty($attributes['tablet_align_items']) ? $attributes['tablet_align_items'] : '';
$mobile_align_items = !empty($attributes['mobile_align_items']) ? $attributes['mobile_align_items'] : '';
// 
// 
// 
// 
// 
// 
if ($wrap) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--wrap';
}
if ($tablet_wrap) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--tablet-wrap';
}
if ($mobile_wrap) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--mobile-wrap';
}
if ($horizontal) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--horizontal';
} else {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--vertical';
}
if ($tablet_horizontal) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--tablet-horizontal';
} else {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--tablet-vertical';
}
if ($mobile_horizontal) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--mobile-horizontal';
} else {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--mobile-vertical';
}

if ($reverse) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--reverse';
}
if ($tablet_reverse) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--tablet-reverse';
}
if ($mobile_reverse) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--mobile-reverse';
}

$classes[] = 'miscellaneous-gutenberg-blocks-flexbox--justify-' . $justify_content;
$classes[] = 'miscellaneous-gutenberg-blocks-flexbox--justify-tablet-' . $tablet_justify_content;
$classes[] = 'miscellaneous-gutenberg-blocks-flexbox--justify-mobile-' . $mobile_justify_content;

$classes[] = 'miscellaneous-gutenberg-blocks-flexbox--align-' . $align_items;
$classes[] = 'miscellaneous-gutenberg-blocks-flexbox--align-tablet-' . $tablet_align_items;
$classes[] = 'miscellaneous-gutenberg-blocks-flexbox--align-mobile-' . $mobile_align_items;




$additional_attributes['class'] = join(' ', $classes);
$additional_attributes['id'] = 'miscellaneous-gutenberg-blocks-' . uniqid();

?>
<div <?php echo get_block_wrapper_attributes($additional_attributes); ?>>
  <?php

  if (!empty($block->inner_blocks)) {
    foreach ($block->inner_blocks as $inner_block) {
      echo $inner_block->render();
    }
  }

  ?>
</div>