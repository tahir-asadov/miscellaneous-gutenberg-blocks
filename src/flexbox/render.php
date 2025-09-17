<?php

$classes = [];
$wrap = !empty($attributes['wrap']) && $attributes['wrap'] == 1;
$tabletWrap = !empty($attributes['tabletWrap']) && $attributes['tabletWrap'] == 1;
$mobileWrap = !empty($attributes['mobileWrap']) && $attributes['mobileWrap'] == 1;
$horizontal = !empty($attributes['horizontal']) && $attributes['horizontal'] == 1;
$tabletHorizontal = !empty($attributes['tabletHorizontal']) && $attributes['tabletHorizontal'] == 1;
$mobileHorizontal = !empty($attributes['mobileHorizontal']) && $attributes['mobileHorizontal'] == 1;
$reverse = !empty($attributes['reverse']) && $attributes['reverse'] == 1;
$tabletReverse = !empty($attributes['tabletReverse']) && $attributes['tabletReverse'] == 1;
$mobileReverse = !empty($attributes['mobileReverse']) && $attributes['mobileReverse'] == 1;
$justifyContent = !empty($attributes['justifyContent']) ? $attributes['justifyContent'] : '';
$tabletJustifyContent = !empty($attributes['tabletJustifyContent']) ? $attributes['tabletJustifyContent'] : '';
$mobileJustifyContent = !empty($attributes['mobileJustifyContent']) ? $attributes['mobileJustifyContent'] : '';
$alignItems = !empty($attributes['alignItems']) ? $attributes['alignItems'] : '';
$tabletAlignItems = !empty($attributes['tabletAlignItems']) ? $attributes['tabletAlignItems'] : '';
$mobileAlignItems = !empty($attributes['mobileAlignItems']) ? $attributes['mobileAlignItems'] : '';

if ($wrap) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--wrap';
}
if ($tabletWrap) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--tablet-wrap';
}
if ($mobileWrap) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--mobile-wrap';
}
if ($horizontal) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--horizontal';
} else {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--vertical';
}
if ($tabletHorizontal) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--tablet-horizontal';
} else {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--tablet-vertical';
}
if ($mobileHorizontal) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--mobile-horizontal';
} else {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--mobile-vertical';
}

if ($reverse) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--reverse';
}
if ($tabletReverse) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--tablet-reverse';
}
if ($mobileReverse) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--mobile-reverse';
}
if (!empty($attributes['grow']) && $attributes['grow'] == 1) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--grow';
}
if (!empty($attributes['tabletGrow']) && $attributes['tabletGrow'] == 1) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--tablet-grow';
}
if (!empty($attributes['mobileGrow']) && $attributes['mobileGrow'] == 1) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--mobile-grow';
}
if (!empty($attributes['shrink']) && $attributes['shrink'] == 1) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--shrink';
}
if (!empty($attributes['tabletShrink']) && $attributes['tabletShrink'] == 1) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--tablet-shrink';
}
if (!empty($attributes['mobileShrink']) && $attributes['mobileShrink'] == 1) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--mobile-shrink';
}
if (!empty($attributes['shrink']) && $attributes['hidden'] == 1) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--hidden';
}
if (!empty($attributes['tabletHidden']) && $attributes['tabletHidden'] == 1) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--tablet-hidden';
}
if (!empty($attributes['mobileHidden']) && $attributes['mobileHidden'] == 1) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--mobile-hidden';
}

$classes[] = 'miscellaneous-gutenberg-blocks-flexbox--justify-' . $justifyContent;
$classes[] = 'miscellaneous-gutenberg-blocks-flexbox--justify-tablet-' . $tabletJustifyContent;
$classes[] = 'miscellaneous-gutenberg-blocks-flexbox--justify-mobile-' . $mobileJustifyContent;

$classes[] = 'miscellaneous-gutenberg-blocks-flexbox--align-' . $alignItems;
$classes[] = 'miscellaneous-gutenberg-blocks-flexbox--align-tablet-' . $tabletAlignItems;
$classes[] = 'miscellaneous-gutenberg-blocks-flexbox--align-mobile-' . $mobileAlignItems;

$columnGapUnit = !empty($attributes['columnGapUnit']) ? $attributes['columnGapUnit'] : 'px';
$tabletColumnGapUnit = !empty($attributes['tabletColumnGapUnit']) ? $attributes['tabletColumnGapUnit'] : 'px';
$mobileColumnGapUnit = !empty($attributes['mobileColumnGapUnit']) ? $attributes['mobileColumnGapUnit'] : 'px';

$rowGapUnit = !empty($attributes['rowGapUnit']) ? $attributes['rowGapUnit'] : 'px';
$tabletRowGapUnit = !empty($attributes['tabletRowGapUnit']) ? $attributes['tabletRowGapUnit'] : 'px';
$mobileRowGapUnit = !empty($attributes['mobileRowGapUnit']) ? $attributes['mobileRowGapUnit'] : 'px';

$columnGap = !empty($attributes['columnGap']) && $attributes['columnGap'] > 0 ? $attributes['columnGap'] . $columnGapUnit : 0;
$tabletColumnGap = !empty($attributes['tabletColumnGap']) && $attributes['tabletColumnGap'] > 0 ? $attributes['tabletColumnGap'] . $tabletColumnGapUnit : 0;
$mobileColumnGap = !empty($attributes['mobileColumnGap']) && $attributes['mobileColumnGap'] > 0 ? $attributes['mobileColumnGap'] . $mobileColumnGapUnit : 0;

$rowGap = !empty($attributes['rowGap']) && $attributes['rowGap'] > 0 ? $attributes['rowGap'] . $rowGapUnit : 0;
$tabletRowGap = !empty($attributes['tabletRowGap']) && $attributes['tabletRowGap'] > 0 ? $attributes['tabletRowGap'] . $tabletRowGapUnit : 0;
$mobileRowGap = !empty($attributes['mobileRowGap']) && $attributes['mobileRowGap'] > 0 ? $attributes['mobileRowGap'] . $mobileRowGapUnit : 0;

$width = !empty($attributes['width']) && $attributes['width'] > 0 ? $attributes['width'] . $attributes['widthUnit'] : 'initial';
$tabletWidth = !empty($attributes['tabletWidth']) && $attributes['tabletWidth'] > 0 ? $attributes['tabletWidth'] . $attributes['tabletWidthUnit'] : 'initial';
$mobileWidth = !empty($attributes['mobileWidth']) && $attributes['mobileWidth'] > 0 ? $attributes['mobileWidth'] . $attributes['mobileWidthUnit'] : 'initial';


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
        <?php echo $columnGap; ?>
      ;
      row-gap:
        <?php echo $rowGap; ?>
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
        <?php echo $tabletWidth; ?>
      ;
      column-gap:
        <?php echo $tabletColumnGap; ?>
      ;
      row-gap:
        <?php echo $tabletRowGap; ?>
      ;
    }
  }

  @media only screen and (max-width:
    <?php echo MISC_GB_BLOCKS_MAX_MOBILE_BREAKING_POINT; ?>
  ) {
    #<?php echo $additional_attributes['id']; ?> {
      width:
        <?php echo $mobileWidth; ?>
      ;
      column-gap:
        <?php echo $mobileColumnGap; ?>
      ;
      row-gap:
        <?php echo $mobileRowGap; ?>
      ;
    }
  }
</style>