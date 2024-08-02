// Only change code below this line
function urlSlug(title) {
  return title.toLowerCase().split(/\s+/).filter(word => word).join('-');
}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
