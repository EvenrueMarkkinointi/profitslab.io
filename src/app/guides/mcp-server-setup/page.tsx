import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "MCP Server Setup: Connect AI to Your Business Tools",
  description:
    "Step-by-step guide to setting up Model Context Protocol (MCP) servers. Connect ChatGPT and Claude to your CRM, database, APIs, and internal tools.",
  alternates: { canonical: "https://www.profitslab.io/guides/mcp-server-setup/" },
  openGraph: {
    title: "MCP Server Setup: Connect AI to Your Business Tools | ProfitSlab",
    description:
      "Learn how to set up MCP servers to connect AI assistants to your business tools, databases, and APIs.",
    url: "https://www.profitslab.io/guides/mcp-server-setup/",
    type: "article",
    images: [{ url: "https://www.profitslab.io/images/og-image.png", width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "What is MCP and why should I care?",
    a: "MCP (Model Context Protocol) is a standard way to connect AI assistants to your business tools. Instead of copying data into ChatGPT, MCP lets AI query your CRM, database, or API directly. It turns AI from a chatbot into an integrated business assistant.",
  },
  {
    q: "Do I need to be a developer to set up MCP servers?",
    a: "Basic MCP servers require some technical setup — installing packages, configuring environment variables, and running local processes. This guide walks through each step. For non-technical users, n8n and Zapier now offer MCP connectors that require no code.",
  },
  {
    q: "Is MCP secure for business data?",
    a: "MCP servers run locally on your machine or server — data never leaves your infrastructure unless you configure it to. You control what data the AI can access through scopes and permissions. For sensitive data, run MCP on a private server and restrict API keys to read-only access.",
  },
  {
    q: "What tools can I connect with MCP?",
    a: "Any tool with an API can have an MCP server. Popular integrations include: CRMs (HubSpot, Salesforce, Pipedrive), databases (PostgreSQL, MySQL, MongoDB), project management (Notion, Asana, Linear), communication (Slack, Discord), and custom internal APIs.",
  },
  {
    q: "How is MCP different from Zapier or Make?",
    a: "Zapier and Make connect apps to each other through automated workflows. MCP connects AI directly to your tools so the AI can query data, take actions, and make decisions in real-time during a conversation. MCP is about AI integration; Zapier is about app automation.",
  },
];

export default function MCPServerSetup() {
  return (
    <>
      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "MCP Server Setup: Connect AI to Your Business Tools",
            description:
              "Step-by-step guide to setting up Model Context Protocol (MCP) servers.",
            author: { "@type": "Organization", name: "ProfitSlab", url: "https://www.profitslab.io" },
            publisher: {
              "@type": "Organization",
              name: "ProfitSlab",
              logo: { "@type": "ImageObject", url: "https://www.profitslab.io/images/logo.png" },
            },
            datePublished: "2026-05-24",
            dateModified: "2026-05-24",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.profitslab.io/guides/mcp-server-setup/",
            },
            image: "https://www.profitslab.io/images/og-image.png",
          }),
        }}
      />
      {/* Breadcrumb structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.profitslab.io/" },
              { "@type": "ListItem", position: 2, name: "Guides", item: "https://www.profitslab.io/guides/" },
              {
                "@type": "ListItem",
                position: 3,
                name: "MCP Server Setup",
                item: "https://www.profitslab.io/guides/mcp-server-setup/",
              },
            ],
          }),
        }}
      />
      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <SiteNav />

      <main className="hub-main">
        <div className="hub-main-inner">
          {/* Breadcrumb */}
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <div className="breadcrumb-inner">
              <Link href="/">Home</Link>
              <span aria-hidden="true">›</span>
              <Link href="/guides">Guides</Link>
              <span aria-hidden="true">›</span>
              <span aria-current="page">MCP Server Setup</span>
            </div>
          </nav>

          <article className="article-content">
            {/* Hero */}
            <header className="article-hero">
              <span className="article-tag">Tech</span>
              <h1>MCP Server Setup: Connect AI to Your Business Tools</h1>
              <p className="article-lead">
                Learn how to set up Model Context Protocol (MCP) servers to connect ChatGPT
                and Claude directly to your CRM, database, APIs, and internal tools.
              </p>
              <div className="article-meta">
                <span>Updated May 2026</span>
                <span>·</span>
                <span>15 min read</span>
                <span>·</span>
                <span>Requires basic terminal/CLI familiarity</span>
              </div>
            </header>

            {/* TOC */}
            <nav className="article-toc" aria-label="Table of contents">
              <strong>What you&apos;ll learn:</strong>
              <ul>
                <li><a href="#what-is-mcp">What is MCP and Why It Matters</a></li>
                <li><a href="#architecture">MCP Architecture Explained</a></li>
                <li><a href="#setup">Setting Up Your First MCP Server</a></li>
                <li><a href="#claude">Connecting Claude Desktop</a></li>
                <li><a href="#chatgpt">Connecting ChatGPT / OpenAI</a></li>
                <li><a href="#database">Database MCP Server (PostgreSQL)</a></li>
                <li><a href="#crm">CRM MCP Server (HubSpot Example)</a></li>
                <li><a href="#custom">Building a Custom MCP Server</a></li>
                <li><a href="#n8n">No-Code Alternative: n8n MCP</a></li>
                <li><a href="#security">Security Best Practices</a></li>
                <li><a href="#troubleshooting">Troubleshooting</a></li>
                <li><a href="#faq-section">FAQ</a></li>
              </ul>
            </nav>

            {/* Intro */}
            <section>
              <p>
                Right now, using AI for business means copying data from your CRM into ChatGPT,
                waiting for an answer, then copying it back. It is slow, error-prone, and breaks
                the moment your data changes.
              </p>
              <p>
                <strong>MCP (Model Context Protocol) fixes this.</strong> It lets AI assistants query
                your tools directly — read customer records, update deals, check inventory, or run
                reports — all within the conversation. No copying. No context switching.
              </p>
              <p>
                This guide shows you how to set up MCP servers step by step. We will start with a
                simple example and work up to connecting your actual business tools.
              </p>
            </section>

            {/* Section 1: What is MCP */}
            <section id="what-is-mcp">
              <h2>What is MCP and Why It Matters for Small Business</h2>
              <p>
                MCP is an open standard created by Anthropic (makers of Claude) that lets AI
                assistants connect to external data sources and tools. Think of it as a USB-C port
                for AI — one standard connector that works with any tool.
              </p>
              <p>
                Before MCP, every AI-tool integration was custom. You needed a different script for
                Slack, another for Notion, another for your CRM. MCP replaces all of that with one
                protocol.
              </p>

              <h3>What You Can Do With MCP</h3>
              <ul>
                <li><strong>Query your database:</strong> &quot;Show me all customers who bought in the last 30 days but haven&apos;t returned&quot;</li>
                <li><strong>Update your CRM:</strong> &quot;Mark this lead as qualified and schedule a follow-up for Tuesday&quot;</li>
                <li><strong>Check inventory:</strong> &quot;Do we have enough stock for next week&apos;s orders?&quot;</li>
                <li><strong>Generate reports:</strong> &quot;Create a summary of this month&apos;s sales by product category&quot;</li>
                <li><strong>Draft emails from data:</strong> &quot;Write a win-back email to customers who haven&apos;t purchased in 90 days&quot;</li>
              </ul>

              <p>
                <strong>The business value:</strong> Tasks that used to take 30 minutes of data
                gathering now take 30 seconds. Your AI assistant becomes a real team member with
                access to your systems.
              </p>
            </section>

            {/* Section 2: Architecture */}
            <section id="architecture">
              <h2>MCP Architecture: How It Works</h2>
              <p>
                MCP has three components. Understanding them makes setup much easier.
              </p>

              <div className="workflow-steps">
                <div className="workflow-step">
                  <div className="workflow-step-num">1</div>
                  <div>
                    <strong>Host</strong>
                    <p>The AI application you use — Claude Desktop, ChatGPT, Cursor, or any MCP-compatible client.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="workflow-step-num">2</div>
                  <div>
                    <strong>Server</strong>
                    <p>A small program that connects to your tool (database, CRM, API) and translates between MCP protocol and your tool&apos;s API.</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="workflow-step-num">3</div>
                  <div>
                    <strong>Tool / Resource</strong>
                    <p>The actual business system — PostgreSQL, HubSpot, Stripe, Notion, or your custom API.</p>
                  </div>
                </div>
              </div>

              <p>
                <strong>How it flows:</strong> You ask Claude a question. Claude checks what MCP
                servers are connected. It sends a query to the relevant server. The server fetches
                data from your tool and returns it. Claude uses that data to answer you.
              </p>
              <p>
                The magic: <strong>all of this happens automatically</strong>. You do not write API
                calls. You just ask questions in plain English.
              </p>
            </section>

            {/* Section 3: Setup */}
            <section id="setup">
              <h2>Setting Up Your First MCP Server</h2>
              <p>
                We will start with the simplest possible setup: connecting Claude Desktop to a
                filesystem MCP server that lets Claude read and write files on your computer.
              </p>

              <h3>Prerequisites</h3>
              <ul>
                <li>Node.js 18+ installed (<code>node --version</code> to check)</li>
                <li>Claude Desktop installed (Mac or Windows)</li>
                <li>A terminal or command prompt</li>
              </ul>

              <h3>Step 1: Install the MCP Filesystem Server</h3>
              <div className="prompt-block">
                <div className="prompt-label">Terminal Command</div>
                <pre className="prompt-text">{`npm install -g @modelcontextprotocol/server-filesystem`}</pre>
              </div>

              <h3>Step 2: Configure Claude Desktop</h3>
              <p>Open Claude Desktop and go to Settings → Developer → Edit Config.</p>
              <p>This opens a file called <code>claude_desktop_config.json</code>. Add this:</p>

              <div className="prompt-block">
                <div className="prompt-label">claude_desktop_config.json</div>
                <pre className="prompt-text">{`{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/path/to/your/documents"
      ]
    }
  }
}`}</pre>
              </div>

              <p>
                Replace <code>/path/to/your/documents</code> with an actual folder on your computer.
                On Mac, this might be <code>/Users/yourname/Documents</code>. On Windows,
                <code>C:\Users\YourName\Documents</code>.
              </p>

              <h3>Step 3: Restart Claude Desktop</h3>
              <p>Quit and reopen Claude. You should see a hammer icon (🔨) in the chat input. This means MCP is active.</p>

              <h3>Step 4: Test It</h3>
              <p>Ask Claude:</p>
              <div className="prompt-block">
                <div className="prompt-label">Test Prompt</div>
                <pre className="prompt-text">{`List all files in my documents folder and tell me what each one is about.`}</pre>
              </div>
              <p>Claude will query the filesystem server and read your files to answer. If it works, your first MCP server is live.</p>
            </section>

            {/* Section 4: Claude */}
            <section id="claude">
              <h2>Connecting Claude Desktop to Multiple MCP Servers</h2>
              <p>
                Once you have the filesystem server working, adding more servers follows the same
                pattern. Claude Desktop can run multiple MCP servers simultaneously.
              </p>

              <h3>Example: Multiple Servers</h3>
              <div className="prompt-block">
                <div className="prompt-label">claude_desktop_config.json</div>
                <pre className="prompt-text">{`{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/yourname/Documents"]
    },
    "sqlite": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sqlite", "/path/to/your/database.db"]
    },
    "fetch": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-fetch"]
    }
  }
}`}</pre>
              </div>

              <p>
                With this config, Claude can: read your files, query your SQLite database, and
                fetch data from any URL — all in one conversation.
              </p>

              <h3>Where to Find MCP Servers</h3>
              <ul>
                <li><strong>Official Anthropic servers:</strong> filesystem, sqlite, fetch, puppeteer (browser automation)</li>
                <li><strong>Community servers:</strong> GitHub, Slack, Notion, HubSpot, Stripe, Google Sheets</li>
                <li><strong>npm search:</strong> <code>npm search mcp-server</code> finds community-built servers</li>
                <li><strong>Build your own:</strong> MCP SDK supports TypeScript, Python, and Go</li>
              </ul>
            </section>

            {/* Section 5: ChatGPT */}
            <section id="chatgpt">
              <h2>Connecting ChatGPT and OpenAI to MCP</h2>
              <p>
                ChatGPT does not natively support MCP yet (as of May 2026). But you can use MCP
                with OpenAI&apos;s API through frameworks like OpenAgents or by building a custom
                integration.
              </p>

              <h3>Option 1: OpenAgents (Easiest)</h3>
              <p>
                OpenAgents is an open-source framework that adds MCP support to OpenAI models. It
                runs locally and connects to the same MCP servers as Claude.
              </p>
              <div className="prompt-block">
                <div className="prompt-label">Setup</div>
                <pre className="prompt-text">{`# Clone OpenAgents
git clone https://github.com/OpenBMB/OpenAgents.git
cd OpenAgents

# Install dependencies
pip install -r requirements.txt

# Configure your OpenAI API key
export OPENAI_API_KEY=your-key-here

# Start the server
python app.py`}</pre>
              </div>

              <h3>Option 2: Custom Integration (More Control)</h3>
              <p>
                If you are building a product or internal tool, you can use the MCP Python SDK
                directly with OpenAI&apos;s API.
              </p>
              <div className="prompt-block">
                <div className="prompt-label">Python Example</div>
                <pre className="prompt-text">{`from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client
import openai

# Connect to an MCP server
server_params = StdioServerParameters(
    command="npx",
    args=["-y", "@modelcontextprotocol/server-sqlite", "/path/to/db.db"]
)

async with stdio_client(server_params) as (read, write):
    async with ClientSession(read, write) as session:
        await session.initialize()
        
        # List available tools
        tools = await session.list_tools()
        
        # Query the database through AI
        response = await openai.chat.completions.create(
            model="gpt-4o",
            messages=[{"role": "user", "content": "Show me sales this month"}],
            tools=tools
        )`}</pre>
              </div>

              <p>
                <strong>Note:</strong> Native MCP support in ChatGPT is expected in late 2026.
                Until then, Claude Desktop has the best MCP experience.
              </p>
            </section>

            {/* Section 6: Database */}
            <section id="database">
              <h2>Database MCP Server: Query Your Data in Plain English</h2>
              <p>
                The SQLite MCP server is the easiest way to start. For production, you will want
                PostgreSQL or MySQL.
              </p>

              <h3>PostgreSQL MCP Server</h3>
              <div className="prompt-block">
                <div className="prompt-label">Installation</div>
                <pre className="prompt-text">{`npm install -g @modelcontextprotocol/server-postgres`}</pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">Configuration</div>
                <pre className="prompt-text">{`{
  "mcpServers": {
    "postgres": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-postgres",
        "postgresql://user:password@localhost:5432/your_database"
      ]
    }
  }
}`}</pre>
              </div>

              <h3>What You Can Ask</h3>
              <ul>
                <li>&quot;How many orders did we get last week?&quot;</li>
                <li>&quot;Show me the top 10 customers by lifetime value&quot;</li>
                <li>&quot;Which products have inventory below 10 units?&quot;</li>
                <li>&quot;Create a report of monthly revenue for the last 6 months&quot;</li>
              </ul>

              <p>
                <strong>Security tip:</strong> Create a read-only database user for MCP. Never use
                your admin credentials. If MCP only needs to read data, restrict it to SELECT
                permissions.
              </p>
            </section>

            {/* Section 7: CRM */}
            <section id="crm">
              <h2>CRM MCP Server: HubSpot Example</h2>
              <p>
                Connecting your CRM is where MCP gets really powerful for sales and customer
                service. Here is how to set up HubSpot (the pattern is similar for Salesforce and
                Pipedrive).
              </p>

              <h3>Step 1: Get Your HubSpot API Key</h3>
              <p>Go to HubSpot → Settings → Integrations → API Key. Copy your private app token.</p>

              <h3>Step 2: Install the HubSpot MCP Server</h3>
              <div className="prompt-block">
                <div className="prompt-label">Terminal</div>
                <pre className="prompt-text">{`npm install -g @modelcontextprotocol/server-hubspot`}</pre>
              </div>

              <h3>Step 3: Configure</h3>
              <div className="prompt-block">
                <div className="prompt-label">claude_desktop_config.json</div>
                <pre className="prompt-text">{`{
  "mcpServers": {
    "hubspot": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-hubspot",
        "--token",
        "your-hubspot-token-here"
      ]
    }
  }
}`}</pre>
              </div>

              <h3>What You Can Do</h3>
              <ul>
                <li>&quot;Show me all deals closing this month&quot;</li>
                <li>&quot;What was the last interaction with [customer name]?&quot;</li>
                <li>&quot;Create a new contact for [name, email, company]&quot;</li>
                <li>&quot;Which leads have not been contacted in 7 days?&quot;</li>
                <li>&quot;Summarize this deal&apos;s history for me&quot;</li>
              </ul>

              <p>
                <strong>For Pipedrive, Salesforce, Zoho:</strong> Community MCP servers exist for
                all major CRMs. Search <code>npm search mcp-server-[crm-name]</code> or check the
                MCP community repository.
              </p>
            </section>

            {/* Section 8: Custom */}
            <section id="custom">
              <h2>Building a Custom MCP Server</h2>
              <p>
                If you have an internal API or a tool without a community server, building your
                own is straightforward. The MCP SDK handles the protocol; you just write the business
                logic.
              </p>

              <h3>Quick Start (TypeScript)</h3>
              <div className="prompt-block">
                <div className="prompt-label">Project Setup</div>
                <pre className="prompt-text">{`mkdir my-mcp-server
cd my-mcp-server
npm init -y
npm install @modelcontextprotocol/sdk zod

# Create src/index.ts`}</pre>
              </div>

              <div className="prompt-block">
                <div className="prompt-label">src/index.ts</div>
                <pre className="prompt-text">{`import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new Server({
  name: "my-business-api",
  version: "1.0.0",
}, {
  capabilities: { tools: {} }
});

// Define a tool
server.setToolHandler("getCustomer", async (args) => {
  // Your API call here
  const customer = await fetch("https://api.mycompany.com/customers/" + args.id);
  return customer.json();
}, {
  id: z.string().describe("Customer ID")
});

// Start the server
const transport = new StdioServerTransport();
await server.connect(transport);`}</pre>
              </div>

              <p>
                This is a minimal example. The full SDK supports resources (read-only data),
                tools (actions), and prompts (templates). See the{" "}
                <a href="https://github.com/modelcontextprotocol">MCP documentation</a> for
                advanced patterns.
              </p>
            </section>

            {/* Section 9: n8n */}
            <section id="n8n">
              <h2>No-Code Alternative: n8n MCP Workflows</h2>
              <p>
                If the terminal setup feels intimidating, n8n (a visual workflow tool) now supports
                MCP through its AI agent nodes. No coding required.
              </p>

              <h3>How It Works</h3>
              <ol>
                <li>Install n8n (cloud or self-hosted)</li>
                <li>Add an AI Agent node to your workflow</li>
                <li>Connect MCP tools: HTTP Request, database query, CRM API</li>
                <li>The AI agent automatically decides which tool to use based on your question</li>
              </ol>

              <h3>When to Use n8n vs Direct MCP</h3>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Use Case</th>
                    <th>Best Choice</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Personal productivity, ad-hoc queries</td>
                    <td>Claude Desktop + MCP</td>
                  </tr>
                  <tr>
                    <td>Team workflows, scheduled reports</td>
                    <td>n8n + MCP</td>
                  </tr>
                  <tr>
                    <td>Customer-facing AI features</td>
                    <td>Custom MCP server + API</td>
                  </tr>
                  <tr>
                    <td>Connecting 10+ tools at once</td>
                    <td>n8n (better orchestration)</td>
                  </tr>
                </tbody>
              </table>

              <p>
                n8n has a free tier for up to 100 workflow executions/month. For small businesses,
                this is usually enough to start.
              </p>
            </section>

            {/* Section 10: Security */}
            <section id="security">
              <h2>Security Best Practices for MCP</h2>
              <p>
                MCP servers have access to your business data. Follow these rules to keep things
                secure.
              </p>

              <h3>The MCP Security Checklist</h3>
              <ul>
                <li>
                  <strong>Use read-only database users.</strong> MCP rarely needs write access. If
                  it does, use a dedicated user with minimal permissions.
                </li>
                <li>
                  <strong>Store API keys in environment variables.</strong> Never paste secrets into
                  config files that might be committed to git.
                </li>
                <li>
                  <strong>Run MCP servers locally or on a private server.</strong> Avoid cloud-hosted
                  MCP servers for sensitive data unless you trust the provider.
                </li>
                <li>
                  <strong>Audit what MCP can access.</strong> Test with: &quot;List all tools you have
                  access to and what they can do.&quot;
                </li>
                <li>
                  <strong>Monitor API usage.</strong> Unexpected spikes in API calls could indicate
                  a loop or misuse.
                </li>
                <li>
                  <strong>Keep MCP servers updated.</strong> Community servers may have security
                  patches. Update monthly.
                </li>
              </ul>

              <p>
                <strong>Red flag:</strong> If an MCP server asks for admin credentials to your CRM,
                database, or cloud infrastructure, say no. Build a limited-access account instead.
              </p>
            </section>

            {/* Section 11: Troubleshooting */}
            <section id="troubleshooting">
              <h2>Troubleshooting Common MCP Issues</h2>

              <h3>Issue: Claude Does Not Show the Hammer Icon</h3>
              <p><strong>Fix:</strong> Check your config file syntax. Common causes:</p>
              <ul>
                <li>Missing comma between server entries</li>
                <li>Incorrect path format (Windows paths need double backslashes)</li>
                <li>The server package is not installed globally (try <code>npm install -g</code>)</li>
              </ul>

              <h3>Issue: MCP Server Crashes</h3>
              <p><strong>Fix:</strong></p>
              <ul>
                <li>Check that the tool/API credentials are valid</li>
                <li>Verify the connection string or API endpoint is correct</li>
                <li>Look at the server logs — most MCP servers output errors to stderr</li>
              </ul>

              <h3>Issue: Claude Cannot Find the Right Tool</h3>
              <p><strong>Fix:</strong> Be specific in your prompt. Instead of &quot;check my database,&quot; say &quot;query my postgres database for customers who signed up last week.&quot;</p>

              <h3>Issue: Slow Responses</h3>
              <p><strong>Fix:</strong> MCP adds latency because the AI makes multiple round-trips. For faster responses:</p>
              <ul>
                <li>Use local MCP servers (not remote APIs)</li>
                <li>Limit the data returned (add date filters or row limits)</li>
                <li>Use Claude 3.5 Sonnet instead of Opus for tool use — it is faster</li>
              </ul>
            </section>

            {/* FAQ Section */}
            <section id="faq-section" className="article-faq">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-list">
                {faqs.map((faq, i) => (
                  <div key={i} className="faq-item">
                    <h3 className="faq-question">{faq.q}</h3>
                    <p className="faq-answer">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Bottom CTA */}
            <div className="article-bottom-cta">
              <h2>Want to implement MCP but need help?</h2>
              <p>
                Take the free <Link href="/audit">AI Audit</Link> — 20 questions that show exactly
                where AI automation can save you the most time in your business.
              </p>
              <Link href="/audit" className="btn-primary">
                Take the Free AI Audit →
              </Link>
            </div>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
            <span>ProfitSlab</span>
          </div>
          <div className="footer-links">
            <Link href="/guides">Guides</Link>
            <Link href="/products">Products</Link>
            <Link href="/audit">AI Audit</Link>
            <a href="mailto:hello@profitslab.io">Contact</a>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
        <p className="footer-copyright">© 2026 ProfitSlab. All rights reserved.</p>
      </footer>
    </>
  );
}
