geeks = [{idea: 'haiku'}, {idea: 'beer'}]
ideas = []
geeks.each do |geek|
    ideas << geek[:idea]
end
puts ideas.inspect 
