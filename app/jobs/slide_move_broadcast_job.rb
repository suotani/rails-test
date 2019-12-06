class SlideMoveBroadcastJob < ApplicationJob
  queue_as :default

  def perform(id)
    ActionCable.server.broadcast 'room_channel', id: id
  end
end
