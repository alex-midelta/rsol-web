<!-- <script lang="ts">

// declare const window: any;

// export default {
//   methods: {
//   },
//   mounted() {

//     (function (d, m) {
//       var kommunicateSettings = { "appId": "15ad27f2d4f8e170627c81a860cc4c3d0", "popupWidget": true, "automaticChatOpenOnNavigation": true };

//       // Personalización
//       kommunicateSettings.onInit = function () {
//         var cssChanges = ".mck-msg-right .mck-msg-box{background-color: blue!important;color:yellow!important;}";
//         Kommunicate.customizeWidgetCss(cssChanges);
//       };

//       var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
//       s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
//       var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
//       window.kommunicate = m; m._globals = kommunicateSettings;
//     })(document, window.kommunicate || {});
//   },
//   data: function () {
//   }
// }

// export default {
//   methods: {
//   },
//   mounted() {

//     (function(d, m){
// 		var kommunicateSettings = {"appId":"15ad27f2d4f8e170627c81a860cc4c3d0","conversationTitle":"<CONVERSATION_TITLE>",
// 			"onInit": function() {
// 	    			Kommunicate.launchConversation(); // To launch the chat widget
// 	    		}
// 	    	};
//          	var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
//           	s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
//           	var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
//           	window.kommunicate = m; m._globals = kommunicateSettings;
//         })(document, window.kommunicate || {});
//   },
//   data: function () {
//   }
// }

</script> -->

<template>
  <div class="km-script-container">
    <iframe src="/rsol-web/km-script.html" frameborder="0" style="height:600px; width:100%;"></iframe>
  </div>
</template>

<style>
  .km-script-container {
    height: 100%;
    width: 100%;
  }
</style>