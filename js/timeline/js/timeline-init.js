/**
 * @file
 * A JavaScript file to initialize timeline.js.
 *
 */

var timeline_json = 'timeline json url here';

createStoryJS({
  type: 'timeline',
  width: '800',
  height: '600',
  //source: timeline_json, // path to the json feed
  source: 'http://hacknight/js/timeline/js/test-json.json',
  embed_id: 'hacknight-timeline', // ID of the DIV you want to load the timeline into
  debug: true,
  css: 'js/timeline/css/timeline.css',     //OPTIONAL PATH TO CSS
  js: 'js/timeline/js/timeline-min.js'    //OPTIONAL PATH TO JS
});
