include Nanoc::Helpers::Rendering
include Nanoc::Helpers::Blogging

# for next and previous links
# http://ecarmi.org/writing/next-previous-links-nanoc/

def previous_link
  prev = sorted_articles.index(@item) + 1
  prev_article = sorted_articles[prev]
  if prev_article.nil?
    ''
  else
    title = prev_article[:title]
    html = "&larr; Previous"
    link_to(html, prev_article.reps[0], :class => "previous", :title => title)
  end
end

def next_link
  nxt = sorted_articles.index(@item) - 1
  if nxt < 0
    ''
  else
    post = sorted_articles[nxt]
    title = post[:title]
    html = "Next &rarr;"
    link_to(html, post.reps[0], :class => "next", :title => title)
  end
end