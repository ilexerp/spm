define("test/sampleModule/0.0.1/module",[],function(e,t){t.get=function(e){return $(e)}}),define("test/sampleModule/0.0.1/debugRequire",["./module"],function(e,t){var n=e("./module.js"),r=e("./module");t.say=function(){n.get(),r.get()}});