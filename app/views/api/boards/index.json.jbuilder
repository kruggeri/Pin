json.array!(@boards) do |board|
  json.partial!('board', board: board)
end
