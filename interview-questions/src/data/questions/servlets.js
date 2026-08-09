// Категория: servlets
export const servlets = {
    id: 'servlets',
    title: 'Servlets, JSP, JSTL',
    icon: '🌐',
    description: 'Java web-технологии',
    questions: [
      {
        id: 'what-is-servlet',
        difficulty: 'easy',
        tags: ['basics'],
        related: ['jsp', 'session-tracking'],
        question: 'Что такое сервлет? Каков его жизненный цикл?',
        answer: `**Сервлет** — Java-класс, обрабатывающий HTTP-запросы на стороне сервера. Работает внутри контейнера сервлетов (Tomcat, Jetty).

**Жизненный цикл** (управляется контейнером):

1. **Загрузка класса и создание экземпляра** — контейнер создаёт один экземпляр сервлета;
2. **init(ServletConfig)** — вызывается один раз после создания; инициализация ресурсов;
3. **service(request, response)** — вызывается для каждого запроса (в отдельном потоке!); \`HttpServlet\` диспетчеризует в \`doGet\`, \`doPost\`, \`doPut\`, \`doDelete\`;
4. **destroy()** — вызывается один раз перед выгрузкой; освобождение ресурсов.

\`\`\`java
@WebServlet("/hello")
public class HelloServlet extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws IOException {
        resp.getWriter().println("Hello!");
    }
}
\`\`\`

Важно: один экземпляр обслуживает много потоков одновременно — сервлет должен быть **потокобезопасным** (без изменяемого состояния в полях).`,
      },
      {
        id: 'jsp',
        difficulty: 'easy',
        tags: ['jsp'],
        related: ['what-is-servlet'],
        question: 'Что такое JSP и чем отличается от сервлета?',
        answer: `**JSP (JavaServer Pages)** — технология создания динамических веб-страниц: HTML с вкраплениями Java-кода.

\`\`\`jsp
<html>
  <body>
    <h1>Hello, <%= request.getParameter("name") %>!</h1>
    <% for (String item : items) { %>
        <p><%= item %></p>
    <% } %>
  </body>
</html>
\`\`\`

**Ключевой факт**: JSP-страница **компилируется в сервлет** при первом обращении. JSP — это «сервлет наизнанку»: сервлет — Java-код, генерирующий HTML; JSP — HTML со вставками Java.

Элементы JSP: скриптлеты \`<% %>\`, выражения \`<%= %>\`, объявления \`<%! %>\`, директивы \`<%@ page/include/taglib %>\`, неявные объекты (request, response, session, application).

Разделение ответственности (MVC): сервлет — контроллер (логика), JSP — представление (отображение). Скриптлеты считаются антипаттерном — вместо них EL и JSTL.`,
      },
      {
        id: 'jstl-el',
        difficulty: 'medium',
        tags: ['jsp'],
        related: ['jsp'],
        question: 'Что такое JSTL и Expression Language (EL)?',
        answer: `**EL (Expression Language)** — язык выражений для доступа к данным в JSP без Java-кода:

\`\`\`jsp
\${user.name}                  <!-- getter: user.getName() -->
\${sessionScope.cart.total}
\${param.id}                   <!-- request.getParameter("id") -->
\${empty list ? 'нет данных' : list[0]}
\`\`\`

**JSTL (JSP Standard Tag Library)** — стандартная библиотека тегов, заменяющая скриптлеты:

\`\`\`jsp
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<c:if test="\${user.admin}">Панель администратора</c:if>

<c:forEach var="item" items="\${cart.items}">
    <p>\${item.name}: \${item.price}</p>
</c:forEach>

<c:choose>
    <c:when test="\${total > 1000}">Скидка!</c:when>
    <c:otherwise>Без скидки</c:otherwise>
</c:choose>
\`\`\`

Библиотеки JSTL: core (c), formatting (fmt), functions (fn), sql, xml.`,
      },
      {
        id: 'session-tracking',
        difficulty: 'medium',
        tags: ['session'],
        related: ['what-is-servlet'],
        question: 'Какие способы управления сессией существуют?',
        answer: `HTTP — протокол без состояния, поэтому для отслеживания пользователя между запросами используются:

**1. Cookies** — сервер отправляет \`Set-Cookie\`, браузер возвращает \`Cookie\` в каждом запросе. Стандартный механизм: \`JSESSIONID\`.

**2. URL Rewriting** — идентификатор сессии добавляется в URL (\`;jsessionid=...\`), если cookies отключены: \`response.encodeURL(url)\`.

**3. Hidden form fields** — скрытые поля форм.

**4. HttpSession API:**

\`\`\`java
HttpSession session = request.getSession();     // создаёт при отсутствии
session.setAttribute("user", user);
User user = (User) session.getAttribute("user");
session.setMaxInactiveInterval(1800);            // таймаут 30 мин
session.invalidate();                            // завершение сессии
\`\`\`

В современных распределённых системах вместо серверных сессий часто используют **stateless-подход**: JWT-токены, а состояние хранят в Redis или БД.`,
      },
    ],
  };
