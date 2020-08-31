module.exports = function(grunt) {

    grunt.initConfig({
        replace: {
            // ID cleanup: performs a manual ID cleanup as Illustrator exports a mess
            illustrator: {
                src: ['assets/svg/optimised/*.svg'],
                overwrite: true,
                replacements: [{
                    // Remove escaped underscore character
                    from: '_x5F_',
                    to: '_'
                }, {
                    // Replace class names with proper classes
                    //class_x3D__x22_tank-option_x22__2_
                    from: /id\=\"class_x3D__x22_(.+?)_x22_(.*?)\"/gi,
                    to: function(matchedWord, index, fullText, regexMatches) {
                        return 'class="'+ regexMatches[0].toLowerCase()+'"';
                    }
                }, {
                    // Lowercase all ids
                    from: /id\=\"(.+?)\"/gi,
                    to: function(matchedWord, index, fullText, regexMatches) {
                        return 'id="'+ regexMatches[0].toLowerCase()+'"';
                    }
                }, {
                    // Lowercase all id references to match the previous replace rule
                    from: /url\(\#(.+?)\)/gi,
                    to: function(matchedWord, index, fullText, regexMatches) {
                        return 'url(#'+ regexMatches[0].toLowerCase() +')';
                    }
                }, {
                    // Lowercase all id href to match the previous replace rule
                    from: /href\=\"\#(.+?)\"/gi,
                    to: function(matchedWord, index, fullText, regexMatches) {
                        return 'href="#'+ regexMatches[0].toLowerCase() +'"';
                    }
                }, {
                    // Remove all font references as we will use CSS for this
                    from: /font\-family\=\"(.+?)\"/gi,
                    to: function(matchedWord, index, fullText, regexMatches) {
                        return '';
                    }
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-text-replace');

};