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
if (!empty($attributes['grow']) && $attributes['grow'] == 1) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--grow';
}
if (!empty($attributes['tablet_grow']) && $attributes['tablet_grow'] == 1) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--tablet-grow';
}
if (!empty($attributes['mobile_grow']) && $attributes['mobile_grow'] == 1) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--mobile-grow';
}
if (!empty($attributes['shrink']) && $attributes['shrink'] == 1) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--shrink';
}
if (!empty($attributes['tablet_shrink']) && $attributes['tablet_shrink'] == 1) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--tablet-shrink';
}
if (!empty($attributes['mobile_shrink']) && $attributes['mobile_shrink'] == 1) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--mobile-shrink';
}
if (!empty($attributes['shrink']) && $attributes['hidden'] == 1) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--hidden';
}
if (!empty($attributes['tablet_hidden']) && $attributes['tablet_hidden'] == 1) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--tablet-hidden';
}
if (!empty($attributes['mobile_hidden']) && $attributes['mobile_hidden'] == 1) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--mobile-hidden';
}

$classes[] = 'miscellaneous-gutenberg-blocks-flexbox--justify-' . $justify_content;
$classes[] = 'miscellaneous-gutenberg-blocks-flexbox--justify-tablet-' . $tablet_justify_content;
$classes[] = 'miscellaneous-gutenberg-blocks-flexbox--justify-mobile-' . $mobile_justify_content;

$classes[] = 'miscellaneous-gutenberg-blocks-flexbox--align-' . $align_items;
$classes[] = 'miscellaneous-gutenberg-blocks-flexbox--align-tablet-' . $tablet_align_items;
$classes[] = 'miscellaneous-gutenberg-blocks-flexbox--align-mobile-' . $mobile_align_items;

$column_gap_unit = !empty($attributes['column_gap_unit']) && $attributes['column_gap_unit'] > 0 ? $attributes['column_gap_unit'] : 'px';
$tablet_column_gap_unit = !empty($attributes['tablet_column_gap_unit']) && $attributes['tablet_column_gap_unit'] > 0 ? $attributes['tablet_column_gap_unit'] : 'px';
$mobile_column_gap_unit = !empty($attributes['mobile_column_gap_unit']) && $attributes['mobile_column_gap_unit'] > 0 ? $attributes['mobile_column_gap_unit'] : 'px';

$row_gap_unit = !empty($attributes['row_gap_unit']) && $attributes['row_gap_unit'] > 0 ? $attributes['row_gap_unit'] : 'px';
$tablet_row_gap_unit = !empty($attributes['tablet_row_gap_unit']) && $attributes['tablet_row_gap_unit'] > 0 ? $attributes['tablet_row_gap_unit'] : 'px';
$mobile_row_gap_unit = !empty($attributes['mobile_row_gap_unit']) && $attributes['mobile_row_gap_unit'] > 0 ? $attributes['mobile_row_gap_unit'] : 'px';

$column_gap = !empty($attributes['column_gap']) && $attributes['column_gap'] > 0 ? $attributes['column_gap'] . $column_gap_unit : 0;
$tablet_column_gap = !empty($attributes['tablet_column_gap']) && $attributes['tablet_column_gap'] > 0 ? $attributes['tablet_column_gap'] . $tablet_column_gap_unit : 0;
$mobile_column_gap = !empty($attributes['mobile_column_gap']) && $attributes['mobile_column_gap'] > 0 ? $attributes['mobile_column_gap'] . $mobile_column_gap_unit : 0;

$row_gap = !empty($attributes['row_gap']) && $attributes['row_gap'] > 0 ? $attributes['row_gap'] . $column_gap_unit : 0;
$tablet_row_gap = !empty($attributes['tablet_row_gap']) && $attributes['tablet_row_gap'] > 0 ? $attributes['tablet_row_gap'] . $tablet_column_gap_unit : 0;
$mobile_row_gap = !empty($attributes['mobile_row_gap']) && $attributes['mobile_row_gap'] > 0 ? $attributes['mobile_row_gap'] . $mobile_row_gap_unit : 0;

$width = !empty($attributes['width']) && $attributes['width'] > 0 ? $attributes['width'] . $attributes['width_unit'] : 'initial';
$tablet_width = !empty($attributes['tablet_width']) && $attributes['tablet_width'] > 0 ? $attributes['tablet_width'] . $attributes['tablet_width_unit'] : 'initial';
$mobile_width = !empty($attributes['mobile_width']) && $attributes['mobile_width'] > 0 ? $attributes['mobile_width'] . $attributes['mobile_width_unit'] : 'initial';


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
<style>
  @media only screen and (min-width:
    <?php echo MISC_GB_BLOCKS_MIN_DESKTOP_BREAKING_POINT; ?>
  ) {
    #<?php echo $additional_attributes['id']; ?> {
      width:
        <?php echo $width; ?>
      ;
      column-gap:
        <?php echo $column_gap; ?>
      ;
      row-gap:
        <?php echo $row_gap; ?>
      ;
    }
  }

  @media only screen and (min-width:
    <?php echo MISC_GB_BLOCKS_MIN_TABLET_BREAKING_POINT; ?>
  ) and (max-width:
    <?php echo MISC_GB_BLOCKS_MAX_TABLET_BREAKING_POINT; ?>
  ) {
    #<?php echo $additional_attributes['id']; ?> {
      width:
        <?php echo $tablet_width; ?>
      ;
      column-gap:
        <?php echo $tablet_column_gap; ?>
      ;
      row-gap:
        <?php echo $tablet_row_gap; ?>
      ;
    }
  }

  @media only screen and (max-width:
    <?php echo MISC_GB_BLOCKS_MAX_MOBILE_BREAKING_POINT; ?>
  ) {
    #<?php echo $additional_attributes['id']; ?> {
      width:
        <?php echo $mobile_width; ?>
      ;
      column-gap:
        <?php echo $mobile_column_gap; ?>
      ;
      row-gap:
        <?php echo $mobile_row_gap; ?>
      ;
    }
  }
</style>