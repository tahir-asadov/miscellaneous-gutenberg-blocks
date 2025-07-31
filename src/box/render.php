<?php

$classes = [];
if (!empty($attributes['grow']) && $attributes['grow'] == 1) {
  $classes[] = 'miscellaneous-gutenberg-blocks-box--grow';
}
if (!empty($attributes['tablet_grow']) && $attributes['tablet_grow'] == 1) {
  $classes[] = 'miscellaneous-gutenberg-blocks-box--tablet-grow';
}
if (!empty($attributes['mobile_grow']) && $attributes['mobile_grow'] == 1) {
  $classes[] = 'miscellaneous-gutenberg-blocks-box--mobile-grow';
}
if (!empty($attributes['shrink']) && $attributes['shrink'] == 1) {
  $classes[] = 'miscellaneous-gutenberg-blocks-box--shrink';
}
if (!empty($attributes['tablet_shrink']) && $attributes['tablet_shrink'] == 1) {
  $classes[] = 'miscellaneous-gutenberg-blocks-box--tablet-shrink';
}
if (!empty($attributes['mobile_shrink']) && $attributes['mobile_shrink'] == 1) {
  $classes[] = 'miscellaneous-gutenberg-blocks-box--mobile-shrink';
}
if (!empty($attributes['shrink']) && $attributes['hidden'] == 1) {
  $classes[] = 'miscellaneous-gutenberg-blocks-box--hidden';
}
if (!empty($attributes['tablet_hidden']) && $attributes['tablet_hidden'] == 1) {
  $classes[] = 'miscellaneous-gutenberg-blocks-box--tablet-hidden';
}
if (!empty($attributes['mobile_hidden']) && $attributes['mobile_hidden'] == 1) {
  $classes[] = 'miscellaneous-gutenberg-blocks-box--mobile-hidden';
}
$additional_attributes['class'] = join(' ', $classes);
$additional_attributes['id'] = 'miscellaneous-gutenberg-blocks-' . uniqid();

$width = !empty($attributes['width']) && $attributes['width'] > 0 ? $attributes['width'] . '%' : 'initial';
$tablet_width = !empty($attributes['tablet_width']) && $attributes['tablet_width'] > 0 ? $attributes['tablet_width'] . '%' : 'initial';
$mobile_width = !empty($attributes['mobile_width']) && $attributes['mobile_width'] > 0 ? $attributes['mobile_width'] . '%' : 'initial';

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
<style>
  @media only screen and (min-width:
    <?php echo MISC_GB_BLOCKS_MIN_DESKTOP_BREAKING_POINT; ?>
  ) {
    #<?php echo $additional_attributes['id']; ?> {
      background: blue;
      width:
        <?php echo $width; ?>
      ;
    }
  }

  @media only screen and (min-width:
    <?php echo MISC_GB_BLOCKS_MIN_TABLET_BREAKING_POINT; ?>
  ) and (max-width:
    <?php echo MISC_GB_BLOCKS_MAX_TABLET_BREAKING_POINT; ?>
  ) {
    #<?php echo $additional_attributes['id']; ?> {
      background: green;
      width:
        <?php echo $tablet_width; ?>
      ;
    }
  }

  @media only screen and (max-width:
    <?php echo MISC_GB_BLOCKS_MAX_MOBILE_BREAKING_POINT; ?>
  ) {
    #<?php echo $additional_attributes['id']; ?> {
      background: red;
      width:
        <?php echo $mobile_width; ?>
      ;
    }
  }
</style>