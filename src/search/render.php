<?php
$show_category = !empty($attributes['show_category']) && $attributes['show_category'] == 1;
$show_search_icon = !empty($attributes['show_search_icon']) && $attributes['show_search_icon'] == 1;
$disable_css = !empty($attributes['disable_css']) && $attributes['disable_css'] == 1;
$search_placeholder = !empty($attributes['search_placeholder']) ? $attributes['search_placeholder'] : '';
$category_text = !empty($attributes['category_text']) ? $attributes['category_text'] : '';
$button_text = !empty($attributes['button_text']) ? $attributes['button_text'] : '';

$classes = [];
if (!$disable_css) {
  $classes[] = 'has-style';
}
if ($show_search_icon) {
  $classes[] = 'show-search-icon';
}
if ($show_category) {
  $classes[] = 'show-category';
}
$additional_classes['class'] = join(' ', $classes);
$categories = get_categories();
?>
<div>
  <form>
    <div <?php echo get_block_wrapper_attributes($additional_classes); ?>>
      <?php if ($show_category && !empty($categories)) { ?>
        <select name="cat" class="search-category">
          <?php if ($category_text != '') { ?>
            <option value=""><?php echo $category_text; ?></option>
          <?php } ?>
          <?php foreach ($categories as $category) { ?>
            <option <?php echo get_query_var('cat') == $category->term_id ? 'selected' : ''; ?> value="<?php echo $category->term_id; ?>"><?php echo $category->name; ?></option>
          <?php } ?>
        </select>
      <?php } ?>
      <input name="s" type="search" value="<?php echo get_query_var('s'); ?>" class="search-input" placeholder="<?php echo $search_placeholder; ?>" />
      <button type="submit" class="search-button"><?php echo !$show_search_icon && $button_text ? $button_text : '&nbsp;' ?></button>
    </div>
  </form>
</div>