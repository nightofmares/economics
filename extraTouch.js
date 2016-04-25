// touchstart events when you first press the screen with
        // your finger
        $(document).on("touchstart", function(e) {
            e.preventDefault();
            
            // changedTouches contains all of the touchstart events
            // that occurred at the same time
            var changedTouches = e.originalEvent.changedTouches;
            
            for (var i = 0; i < changedTouches.length; i++) {
                var touch = changedTouches[i];
                
                $("<img>").attr({
                    src: "https://www.kasandbox.org/programming-images/avatars/mr-pink.png",
                    // each touch has a unique identifier
                    // we'll assign use this identifier as
                    // the id so that each touch is paired
                    // with an <img>
                    id: touch.identifier    
                }).css({
                    position: "absolute",
                    left: touch.pageX,
                    top: touch.pageY
                }).appendTo(document.body);
            }
        });
        
        // touchmove events occur when you drag your finger
        $(document).on("touchmove", function(e) {
            e.preventDefault();
            
            var changedTouches = e.originalEvent.changedTouches;
            
            for (var i = 0; i < changedTouches.length; i++) {
                var touch = changedTouches[i];
                $("#" + touch.identifier).css({
                    left: touch.pageX,
                    top: touch.pageY
                });
            }
        });
        
        // touchend events occur when you lift your finger
        $(document).on("touchend", function(e) {
            e.preventDefault();
            
            var changedTouches = e.originalEvent.changedTouches;
            
            for (var i = 0; i < changedTouches.length; i++) {
                var touch = changedTouches[i];
                $("#" + touch.identifier).remove();
            }
        });
        
        // touchcancel events occur when you switch to a different program
        // or do something to interrupt the stream of touch events
        $(document).on("touchcancel", function(e) {
            e.preventDefault();
            
            var changedTouches = e.originalEvent.changedTouches;
            
            for (var i = 0; i < changedTouches.length; i++) {
                var touch = changedTouches[i];
                $("#" + touch.identifier).remove();
            }
        });