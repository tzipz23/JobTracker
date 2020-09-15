require 'HTTParty'
require 'Nokogiri'

class Scraper

    attr_accessor :parse_page

    def initialize
        doc = HTTParty.get('https://www.adzuna.com/land/ad/1336315242?se=YIhpBVDB6hGvTCOF-HZ_zw&utm_medium=api&utm_source=6f19bb37&v=EDC95C330263D8557CAA7CB0A19F702C40405ECE')
        @parse_page ||= Nokogiri::HTML(doc)

    end

    

end
