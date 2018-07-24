
const code = `!TiddlyWiki Formatting
* Rendered versions can be found at: http://www.tiddlywiki.com/#Reference

|!Option            | !Syntax            |
|bold font          | ''bold''           |
|italic type        | //italic//         |
|underlined text    | __underlined__     |
|strikethrough text | --strikethrough--  |
|superscript text   | super^^script^^    |
|subscript text     | sub~~script~~      |
|highlighted text   | @@highlighted@@    |
|preformatted text  | {{{preformatted}}} |

!Block Elements
<<<
!Heading 1

!!Heading 2

!!!Heading 3

!!!!Heading 4

!!!!!Heading 5
<<<

!!Lists
<<<
* unordered list, level 1
** unordered list, level 2
*** unordered list, level 3

# ordered list, level 1
## ordered list, level 2
### unordered list, level 3

; definition list, term
: definition list, description
<<<

!!Blockquotes
<<<
> blockquote, level 1
>> blockquote, level 2
>>> blockquote, level 3

> blockquote
<<<

!!Preformatted Text
<<<
{{{
preformatted (e.g. code)
}}}
<<<

!!Code Sections
<<<
{{{
Text style code
}}}

//{{{
JS styled code. TiddlyWiki mixed mode should support highlighter switching in the future.
//}}}

<!--{{{-->
XML styled code. TiddlyWiki mixed mode should support highlighter switching in the future.
<!--}}}-->
<<<

!!Tables
<<<
|CssClass|k
|!heading column 1|!heading column 2|
|row 1, column 1|row 1, column 2|
|row 2, column 1|row 2, column 2|
|>|COLSPAN|
|ROWSPAN| ... |
|~| ... |
|CssProperty:value;...| ... |
|caption|c

''Annotation:''
* The {{{>}}} marker creates a "colspan", causing the current cell to merge with the one to the right.
* The {{{~}}} marker creates a "rowspan", causing the current cell to merge with the one above.
<<<
!!Images /% TODO %/
cf. [[TiddlyWiki.com|http://www.tiddlywiki.com/#EmbeddedImages]]

!Hyperlinks
* [[WikiWords|WikiWord]] are automatically transformed to hyperlinks to the respective tiddler
** the automatic transformation can be suppressed by preceding the respective WikiWord with a tilde ({{{~}}}): {{{~WikiWord}}}
* [[PrettyLinks]] are enclosed in square brackets and contain the desired tiddler name: {{{[[tiddler name]]}}}
** optionally, a custom title or description can be added, separated by a pipe character ({{{|}}}): {{{[[title|target]]}}}<br>'''N.B.:''' In this case, the target can also be any website (i.e. URL).

!Custom Styling
* {{{@@CssProperty:value;CssProperty:value;...@@}}}<br>''N.B.:'' CSS color definitions should use lowercase letters to prevent the inadvertent creation of WikiWords.
* <html><code>{{customCssClass{...}}}</code></html>
* raw HTML can be inserted by enclosing the respective code in HTML tags: {{{<html> ... </html>}}}

!Special Markers
* {{{<br>}}} forces a manual line break
* {{{----}}} creates a horizontal ruler
* [[HTML entities|http://www.tiddlywiki.com/#HtmlEntities]]
* [[HTML entities local|HtmlEntities]]
* {{{<<macroName>>}}} calls the respective [[macro|Macros]]
* To hide text within a tiddler so that it is not displayed, it can be wrapped in {{{/%}}} and {{{%/}}}.<br/>This can be a useful trick for hiding drafts or annotating complex markup.
* To prevent wiki markup from taking effect for a particular section, that section can be enclosed in three double quotes: e.g. {{{"""WikiWord"""}}}.

`;

export default code;
