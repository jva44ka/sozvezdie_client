Основная директория проекта: repo -> src -> app. В ней лежат папки:

### components
Компоненты, лежат в древовидной структуре приблизительно в какой они и располагаются в dom дереве.

### models
Модели, отражение Viewmodels на бэкенде

### services
Инжектирующиеся сервисы с состоянием, независимым от локальных состояний компонентов.
+ configuration.service.ts - конструируется путь к бэкенду в зависимости от порта, http/https и т.д., также флаг debug/release 
+ offer-store.service.ts - кеш для хранения списка туров, чтобы не перезапрашивать все туры при каждой инициализации компонента страницы с турами
+ api -> http - тут лежат сервисы запросов к бэкенду (по http)
    + base-http.service.ts - базовый абстрактный класс с типичными унифицированными запросами REST
    + offer-http.service.ts - сервис конкретно для запросов к offer-контроллеру
    
### shared
общие компоненты/пайпы и т.д.

![screen1](http://i.piccy.info/i9/3820e5aa5e434dbe6ad523a76b8212d7/1605463166/578618/1405458/screen1.png)
![screen2](http://i.piccy.info/i9/5a122912dd77831e8f34b4628ad14c47/1605463266/241366/1405458/screen2.jpg)
