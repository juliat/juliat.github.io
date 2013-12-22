module NextPreviousHelper
  # for next and previous links
  # http://ecarmi.org/writing/next-previous-links-nanoc/

  def portfolio_pieces
    selected = @items.select{ |item| !(item[:kind]).nil? && item[:kind] == 'portfolio'}
  end

  def sorted_portfolio_pieces
    return portfolio_pieces.sort_by{ |p| p[:number] }.reverse
  end

  def previous_link
    prev = sorted_portfolio_pieces.index(@item) + 1
    prev_article = sorted_portfolio_pieces[prev]
    if prev_article.nil?
      ''
    else
      title = prev_article[:title]
      html = "&larr; Previous"
      link_to(html, prev_article.reps[0], :class => "previous", :title => title)
    end
  end

  def next_link
    nxt = sorted_portfolio_pieces.index(@item) - 1
    if nxt < 0
      ''
    else
      post = sorted_portfolio_pieces[nxt]
      title = post[:title]
      html = "Next &rarr;"
      link_to(html, post.reps[0], :class => "next", :title => title)
    end
  end
end

include NextPreviousHelper