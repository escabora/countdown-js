# Countdown com Vanilla Js

Plugin baseado no conceito de classe para ser importado como modulo em qualquer projeto que utilize Javascript.  

# Exemplos de Uso
```javascript
import Countdown from './countdown.js';
const tempoParaONatal = new Countdown('24 December 2019 23:59:59 GMT-0300');

//Return Class Countdown
Countdown {futureDate: "24 December 2019 23:59:59 GMT-0300"}
    futureDate: "24 December 2019 23:59:59 GMT-0300"
    days: 2
    hours: 55
    minutes: 3321
    seconds: 19
    total: Object
    _actualDate: Sat Dec 22 2019 17:38:26 GMT-0200 (Horário de Verão de Brasília)
    _futureDate: Tue Dec 25 2019 00:59:59 GMT-0200 (Horário de Verão de Brasília)
    _timeStampDiff: 199293
    __proto__: Object
```