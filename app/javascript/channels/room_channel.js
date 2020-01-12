import consumer from "./consumer"
console.log("aaaaaa")
let currentSlideId = 1;
$(function() {
  const slideChannel = consumer.subscriptions.create({channel: "RoomChannel", room: $("h1").data("room-id")},{
    connected() {
      $("#slide1").show();
    },

    disconnected() {
      // Called when the subscription has been terminated by the server
    },

    received(data) {
      $("div").hide();
      $("#slide" + data["id"]).show();
    },

    move: function(id) {
      return this.perform('move', {
        id: id,
        room: $("h1").data("room-id")
      });
    }
  });

  $(document).on('click', "#next", function(event) {
    console.log("aaa")
    let nextSlideId = currentSlideId + 1;
    if(nextSlideId > 4){
      nextSlideId = 1;
    }
    currentSlideId = nextSlideId;
    slideChannel.move(nextSlideId);
    return event.preventDefault();
  });
});