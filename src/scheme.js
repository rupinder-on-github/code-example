
const code = `; See if the input starts with a given symbol.
(define (match-symbol input pattern)
  (cond ((null? (remain input)) #f)
  ((eqv? (car (remain input)) pattern) (r-cdr input))
  (else #f)))

; Allow the input to start with one of a list of patterns.
(define (match-or input pattern)
  (cond ((null? pattern) #f)
  ((match-pattern input (car pattern)))
  (else (match-or input (cdr pattern)))))

; Allow a sequence of patterns.
(define (match-seq input pattern)
  (if (null? pattern)
      input
      (let ((match (match-pattern input (car pattern))))
  (if match (match-seq match (cdr pattern)) #f))))

; Match with the pattern but no problem if it does not match.
(define (match-opt input pattern)
  (let ((match (match-pattern input (car pattern))))
    (if match match input)))

; Match anything (other than '()), until pattern is found. The rather
; clumsy form of requiring an ending pattern is needed to decide where
; the end of the match is. If none is given, this will match the rest
; of the sentence.
(define (match-any input pattern)
  (cond ((null? (remain input)) #f)
  ((null? pattern) (f-cons (remain input) (clear-remain input)))
  (else
   (let ((accum-any (collector)))
     (define (match-pattern-any input pattern)
       (cond ((null? (remain input)) #f)
       (else (accum-any (car (remain input)))
       (cond ((match-pattern (r-cdr input) pattern))
             (else (match-pattern-any (r-cdr input) pattern))))))
     (let ((retval (match-pattern-any input (car pattern))))
       (if retval
     (f-cons (accum-any) retval)
     #f))))))

`;

export default code;
