@pins.each do |pin|
  json.set! pin.id do
    json.partial! "pin", pin: pin
  end 
end
