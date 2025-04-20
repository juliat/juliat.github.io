module Jekyll
  module StringHelper
    def computer_friendly_name(string)
      string.gsub(/\/portfolio\//, '').gsub(/\//, '')
    end
  end
end

Liquid::Template.register_filter(Jekyll::StringHelper) 