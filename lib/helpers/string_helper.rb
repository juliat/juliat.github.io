module StringHelper
  def computerFriendlyName(string)
    return string.gsub(/\/portfolio\//, '').gsub(/\//, '')
  end
end

include StringHelper