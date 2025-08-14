<?php
$reversed = !empty($attributes['reversed']) && $attributes['reversed'] == 1;
$tabletReversed = !empty($attributes['tabletReversed']) && $attributes['tabletReversed'] == 1;
$mobileReversed = !empty($attributes['mobileReversed']) && $attributes['mobileReversed'] == 1;
$stacked = !empty($attributes['stacked']) && $attributes['stacked'] == 1;
$tabletStacked = !empty($attributes['tabletStacked']) && $attributes['tabletStacked'] == 1;
$mobileStacked = !empty($attributes['mobileStacked']) && $attributes['mobileStacked'] == 1;
$gap = !empty($attributes['gap']) ? $attributes['gap'] : 0;
$tabletGap = !empty($attributes['tabletGap']) ? $attributes['tabletGap'] : 0;
$mobileGap = !empty($attributes['mobileGap']) ? $attributes['mobileGap'] : 0;
$svgColor = !empty($attributes['svgColor']) ? $attributes['svgColor'] : '';
$imageWidth = !empty($attributes['imageWidth']) ? $attributes['imageWidth'] : '';
$imageContent = !empty($attributes['imageContent']) ? $attributes['imageContent'] : '';
$text = !empty($attributes['text']) ? $attributes['text'] : '';
$classes = [];
if ($reversed) {
  $classes[] = 'miscellaneous-gutenberg-blocks-icon-and-text--is-reversed';
}
if ($tabletReversed) {
  $classes[] = 'miscellaneous-gutenberg-blocks-icon-and-text--tablet-is-reversed';
}
if ($mobileReversed) {
  $classes[] = 'miscellaneous-gutenberg-blocks-icon-and-text--mobile-is-reversed';
}

if ($stacked) {
  $classes[] = 'miscellaneous-gutenberg-blocks-icon-and-text--is-stacked';
}
if ($tabletStacked) {
  $classes[] = 'miscellaneous-gutenberg-blocks-icon-and-text--tablet-is-stacked';
}
if ($mobileStacked) {
  $classes[] = 'miscellaneous-gutenberg-blocks-icon-and-text--mobile-is-stacked';
}


$additional_attributes['class'] = join(' ', $classes);
$additional_attributes['id'] = 'miscellaneous-gutenberg-blocks-' . uniqid();
?>
<div <?php echo get_block_wrapper_attributes($additional_attributes); ?>>
  <div class="miscellaneous-gutenberg-blocks-icon-and-text--left">
    <?php if (!empty($attributes['imageUrl'])) { ?>
      <?php if (str_ends_with($attributes['imageUrl'], '.svg')) { ?>
        <?php echo $imageContent; ?>
      <?php } else { ?>
        <img style="width: <?php echo $imageWidth; ?>px" src="<?php echo $attributes['imageUrl']; ?>" alt="<?php echo $attributes['imageName']; ?>">
      <?php } ?>
    <?php } ?>
  </div>
  <div class="miscellaneous-gutenberg-blocks-icon-and-text--right">
    <?php echo $text; ?>
  </div>
</div>
<style>
  #<?php echo $additional_attributes['id']; ?> svg {
    <?php if ($svgColor) { ?>
      <?php echo "color: {$svgColor};" ?>
    <?php } ?>
    <?php echo "width: {$imageWidth}px;" ?>
  }

  @media only screen and (min-width:
    <?php echo MISC_GB_BLOCKS_MIN_DESKTOP_BREAKING_POINT; ?>
  ) {
    #<?php echo $additional_attributes['id']; ?> {
      <?php echo "gap: {$gap}px;" ?>
    }
  }

  @media only screen and (min-width:
    <?php echo MISC_GB_BLOCKS_MIN_TABLET_BREAKING_POINT; ?>
  ) and (max-width:
    <?php echo MISC_GB_BLOCKS_MAX_TABLET_BREAKING_POINT; ?>
  ) {
    #<?php echo $additional_attributes['id']; ?> {
      <?php echo "gap: {$tabletGap}px;" ?>
    }
  }

  @media only screen and (max-width:
    <?php echo MISC_GB_BLOCKS_MAX_MOBILE_BREAKING_POINT; ?>
  ) {
    #<?php echo $additional_attributes['id']; ?> {
      <?php echo "gap: {$mobileGap}px;" ?>
    }
  }
</style>