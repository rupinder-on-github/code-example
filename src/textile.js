
const code = `h1. Textile Mode

A paragraph without formatting.

p. A simple Paragraph.


h2. Phrase Modifiers

Here are some simple phrase modifiers: *strong*, _emphasis_, **bold**, and __italic__.

A ??citation??, -deleted text-, +inserted text+, some ^superscript^, and some ~subscript~.

A %span element% and @code element@

A "link":http://example.com, a "link with (alt text)":urlAlias

[urlAlias]http://example.com/

An image: !http://example.com/image.png! and an image with a link: !http://example.com/image.png!:http://example.com

A sentence with a footnote.[123]

fn123. The footnote is defined here.

Registered(r), Trademark(tm), and Copyright(c)


h2. Headers

h1. Top level
h2. Second level
h3. Third level
h4. Fourth level
h5. Fifth level
h6. Lowest level


h2.  Lists

* An unordered list
** foo bar
*** foo bar
**** foo bar
** foo bar

# An ordered list
## foo bar
### foo bar
#### foo bar
## foo bar

- definition list := description
- another item    := foo bar
- spanning ines   :=
                     foo bar

                     foo bar =:


h2. Attributes

Layouts and phrase modifiers can be modified with various kinds of attributes: alignment, CSS ID, CSS class names, language, padding, and CSS styles.

h3. Alignment

div<. left align
div>. right align

h3. CSS ID and class name

You are a %(my-id#my-classname) rad% person.

h3. Language

p[en_CA]. Strange weather, eh?

h3. Horizontal Padding

p(())). 2em left padding, 3em right padding

h3. CSS styling

p{background: red}. Fire!


h2. Table

|_.              Header 1               |_.      Header 2        |
|{background:#ddd}. Cell with background|         Normal         |
|\\2.         Cell spanning 2 columns                             |
|/2.         Cell spanning 2 rows       |(cell-class). one       |
|                                                two             |
|>.                  Right aligned cell |<. Left aligned cell    |


h3. A table with attributes:

table(#prices).
|Adults|$5|
|Children|$2|


h2. Code blocks

bc.
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

pre..
                ,,,,,,
            o#'9MMHb':'-,o,
         .oH":HH$' "' ' -*R&o,
        dMMM*""'\`'      .oM"HM?.
       ,MMM'          "HLbd< ?&H\
      .:MH ."\\          \` MM  MM&b
     . "*H    -        &MMMMMMMMMH:
     .    dboo        MMMMMMMMMMMM.
     .   dMMMMMMb      *MMMMMMMMMP.
     .    MMMMMMMP        *MMMMMP .
          \`#MMMMM           MM6P ,
       '    \`MMMP"           HM*\`,
        '    :MM             .- ,
         '.   \`#?..  .       ..'
            -.   .         .-
              ''-.oo,oo.-''

\\. _(9>
 \\==_)
  -'=

h2. Temporarily disabling textile markup

notextile. Don't __touch this!__

Surround text with double-equals to disable textile inline. Example: Use ==*asterisks*== for *strong* text.


h2. HTML

Some block layouts are simply textile versions of HTML tags with the same name, like @div@, @pre@, and @p@. HTML tags can also exist on their own line:

<section>
  <h1>Title</h1>
  <p>Hello!</p>
</section>


`;

export default code;
