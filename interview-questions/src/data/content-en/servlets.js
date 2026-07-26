// Английские переводы: servlets
export const servlets = {
    title: 'Servlets, JSP, JSTL',
    description: 'Java web technologies',
    questions: {
      'what-is-servlet': {
        question: 'What is a servlet? What is its lifecycle?',
        answer: `A **servlet** is a Java class that handles HTTP requests on the server side. It runs inside a servlet container (Tomcat, Jetty).

**Lifecycle** (managed by the container):

1. **Class loading and instantiation** — the container creates a single instance of the servlet;
2. **init(ServletConfig)** — called once after creation; resource initialization;
3. **service(request, response)** — called for every request (in a separate thread!); \`HttpServlet\` dispatches to \`doGet\`, \`doPost\`, \`doPut\`, \`doDelete\`;
4. **destroy()** — called once before unloading; resource cleanup.

\`\`\`java
@WebServlet("/hello")
public class HelloServlet extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws IOException {
        resp.getWriter().println("Hello!");
    }
}
\`\`\`

Important: a single instance serves many threads simultaneously — the servlet must be **thread-safe** (no mutable state in fields).`,
      },
      jsp: {
        question: 'What is JSP and how does it differ from a servlet?',
        answer: `**JSP (JavaServer Pages)** is a technology for creating dynamic web pages: HTML with embedded Java code.

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

**Key fact**: a JSP page is **compiled into a servlet** on first access. JSP is a "servlet inside out": a servlet is Java code that generates HTML; JSP is HTML with Java inserts.

JSP elements: scriptlets \`<% %>\`, expressions \`<%= %>\`, declarations \`<%! %>\`, directives \`<%@ page/include/taglib %>\`, implicit objects (request, response, session, application).

Separation of concerns (MVC): the servlet is the controller (logic), JSP is the view (presentation). Scriptlets are considered an anti-pattern — use EL and JSTL instead.`,
      },
      'jstl-el': {
        question: 'What are JSTL and Expression Language (EL)?',
        answer: `**EL (Expression Language)** is an expression language for accessing data in JSP without Java code:

\`\`\`jsp
\${user.name}                  <!-- getter: user.getName() -->
\${sessionScope.cart.total}
\${param.id}                   <!-- request.getParameter("id") -->
\${empty list ? 'no data' : list[0]}
\`\`\`

**JSTL (JSP Standard Tag Library)** is the standard tag library that replaces scriptlets:

\`\`\`jsp
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<c:if test="\${user.admin}">Admin panel</c:if>

<c:forEach var="item" items="\${cart.items}">
    <p>\${item.name}: \${item.price}</p>
</c:forEach>

<c:choose>
    <c:when test="\${total > 1000}">Discount!</c:when>
    <c:otherwise>No discount</c:otherwise>
</c:choose>
\`\`\`

JSTL libraries: core (c), formatting (fmt), functions (fn), sql, xml.`,
      },
      'session-tracking': {
        question: 'What session management techniques exist?',
        answer: `HTTP is a stateless protocol, so the following are used to track a user between requests:

**1. Cookies** — the server sends \`Set-Cookie\`, the browser returns \`Cookie\` with every request. The standard mechanism: \`JSESSIONID\`.

**2. URL Rewriting** — the session identifier is appended to the URL (\`;jsessionid=...\`) when cookies are disabled: \`response.encodeURL(url)\`.

**3. Hidden form fields**.

**4. HttpSession API:**

\`\`\`java
HttpSession session = request.getSession();     // creates one if absent
session.setAttribute("user", user);
User user = (User) session.getAttribute("user");
session.setMaxInactiveInterval(1800);            // 30-minute timeout
session.invalidate();                            // end the session
\`\`\`

In modern distributed systems, a **stateless approach** is often used instead of server-side sessions: JWT tokens, with state stored in Redis or a database.`,
      },
    },
  };
