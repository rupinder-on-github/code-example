
const code = `\\begin{module}[id=bbt-size]
\\importmodule[balanced-binary-trees]{balanced-binary-trees}
\\importmodule[\\KWARCslides{dmath/en/cardinality}]{cardinality}

\\begin{frame}
  \\frametitle{Size Lemma for Balanced Trees}
  \\begin{itemize}
  \\item
    \\begin{assertion}[id=size-lemma,type=lemma] 
    Let $G=\\tup{V,E}$ be a \\termref[cd=binary-trees]{balanced binary tree} 
    of \\termref[cd=graph-depth,name=vertex-depth]{depth}$n>i$, then the set
     $\\defeq{\\livar{V}i}{\\setst{\\inset{v}{V}}{\\gdepth{v} = i}}$ of
    \\termref[cd=graphs-intro,name=node]{nodes} at 
    \\termref[cd=graph-depth,name=vertex-depth]{depth} $i$ has
    \\termref[cd=cardinality,name=cardinality]{cardinality} $\\power2i$.
   \\end{assertion}
  \\item
    \\begin{sproof}[id=size-lemma-pf,proofend=,for=size-lemma]{via induction over the depth $i$.}
      \\begin{spfcases}{We have to consider two cases}
        \\begin{spfcase}{$i=0$}
          \\begin{spfstep}[display=flow]
            then $\\livar{V}i=\\set{\\livar{v}r}$, where $\\livar{v}r$ is the root, so
            $\\eq{\\card{\\livar{V}0},\\card{\\set{\\livar{v}r}},1,\\power20}$.
          \\end{spfstep}
        \\end{spfcase}
        \\begin{spfcase}{$i>0$}
          \\begin{spfstep}[display=flow]
           then $\\livar{V}{i-1}$ contains $\\power2{i-1}$ vertexes 
           \\begin{justification}[method=byIH](IH)\\end{justification}
          \\end{spfstep}
          \\begin{spfstep}
           By the \\begin{justification}[method=byDef]definition of a binary
              tree\\end{justification}, each $\\inset{v}{\\livar{V}{i-1}}$ is a leaf or has
            two children that are at depth $i$.
          \\end{spfstep}
          \\begin{spfstep}
           As $G$ is \\termref[cd=balanced-binary-trees,name=balanced-binary-tree]{balanced} and $\\gdepth{G}=n>i$, $\\livar{V}{i-1}$ cannot contain
            leaves.
          \\end{spfstep}
          \\begin{spfstep}[type=conclusion]
           Thus $\\eq{\\card{\\livar{V}i},{\\atimes[cdot]{2,\\card{\\livar{V}{i-1}}}},{\\atimes[cdot]{2,\\power2{i-1}}},\\power2i}$.
          \\end{spfstep}
        \\end{spfcase}
      \\end{spfcases}
    \\end{sproof}
  \\item 
    \\begin{assertion}[id=fbbt,type=corollary]
      A fully balanced tree of depth $d$ has $\\power2{d+1}-1$ nodes.
    \\end{assertion}
  \\item
      \\begin{sproof}[for=fbbt,id=fbbt-pf]{}
        \\begin{spfstep}
          Let $\\defeq{G}{\\tup{V,E}}$ be a fully balanced tree
        \\end{spfstep}
        \\begin{spfstep}
          Then $\\card{V}=\\Sumfromto{i}1d{\\power2i}= \\power2{d+1}-1$.
        \\end{spfstep}
      \\end{sproof}
    \\end{itemize}
  \\end{frame}
\\begin{note}
  \\begin{omtext}[type=conclusion,for=binary-tree]
    This shows that balanced binary trees grow in breadth very quickly, a consequence of
    this is that they are very shallow (and this compute very fast), which is the essence of
    the next result.
  \\end{omtext}
\\end{note}
\\end{module}

%%% Local Variables: 
%%% mode: LaTeX
%%% TeX-master: "all"
%%% End: \\end{document}

`;

export default code;
