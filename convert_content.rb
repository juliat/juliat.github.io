#!/usr/bin/env ruby

require 'fileutils'

def convert_portfolio_item(file)
  content = File.read(file)
  
  # Convert ERB to Liquid
  content.gsub!('<%= @item[:date] %>', '{{ page.date | date: "%B %Y" }}')
  content.gsub!(/<%= @item\[(.*?)\] %>/) { "{{ page.#{$1.gsub(':', '')} }}" }
  
  # Add kind and layout to frontmatter if not present
  if content.match(/^---\n(.*?)\n---/m)
    frontmatter = $1
    unless frontmatter.include?('kind:')
      content.sub!(/^---\n/, "---\nkind: portfolio\n")
    end
    unless frontmatter.include?('layout:')
      content.sub!(/^---\n/, "---\nlayout: portfolio-piece\n")
    end
  end
  
  new_file = "_portfolio/#{File.basename(file)}"
  File.write(new_file, content)
end

def convert_case_study(file)
  content = File.read(file)
  
  # Add kind and layout to frontmatter if not present
  if content.match(/^---\n(.*?)\n---/m)
    frontmatter = $1
    unless frontmatter.include?('kind:')
      content.sub!(/^---\n/, "---\nkind: case-study\n")
    end
    unless frontmatter.include?('layout:')
      content.sub!(/^---\n/, "---\nlayout: portfolio-piece\n")
    end
  end
  
  new_file = "_case-studies/#{File.basename(file)}"
  File.write(new_file, content)
end

# Create directories if they don't exist
FileUtils.mkdir_p '_portfolio'
FileUtils.mkdir_p '_case-studies'

# Convert portfolio items
Dir.glob('content/portfolio/*.html').each do |file|
  puts "Converting portfolio item: #{file}"
  convert_portfolio_item(file)
end

# Convert case studies
Dir.glob('content/case-studies/*.{html,md}').each do |file|
  puts "Converting case study: #{file}"
  convert_case_study(file)
end

puts "Conversion complete!" 