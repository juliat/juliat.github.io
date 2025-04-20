module Jekyll
  module NextPreviousHelper
    def portfolio_pieces
      @site.posts.docs.select { |item| item.data['kind'] == 'portfolio' }
    end

    def sorted_portfolio_pieces
      portfolio_pieces.sort_by { |p| p.data['number'] }.reverse
    end

    def next_portfolio_item(index)
      sorted_portfolio_pieces[index + 1]
    end

    def previous_link(item)
      prev = sorted_portfolio_pieces.index(item) + 1
      prev_article = sorted_portfolio_pieces[prev]
      if prev_article.nil?
        ''
      else
        title = prev_article.data['title']
        html = "&larr; Previous"
        "<a href='#{prev_article.url}' class='previous' title='#{title}'>#{html}</a>"
      end
    end

    def next_link(item)
      nxt = sorted_portfolio_pieces.index(item) - 1
      if nxt < 0
        ''
      else
        post = sorted_portfolio_pieces[nxt]
        title = post.data['title']
        html = "Next &rarr;"
        "<a href='#{post.url}' class='next' title='#{title}'>#{html}</a>"
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::NextPreviousHelper) 