module Jekyll
  module Filters
    def computer_friendly_name(input)
      input.gsub(/[^a-zA-Z0-9-]/, '-').downcase
    end
  end
end

Liquid::Template.register_filter(Jekyll::Filters) 