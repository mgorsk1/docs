"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9895],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),h=i,g=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return t?a.createElement(g,r(r({ref:n},u),{},{components:t})):a.createElement(g,r({ref:n},u))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8822:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const o={title:"Data Lineage with Snowflake",date:new Date("2022-04-27T00:00:00.000Z"),authors:["Robinson"],description:"The OpenLineage Adapter offers Snowflake's enterprise users a powerful tool for analyzing their pipelines."},r=void 0,l={permalink:"/blog/openlineage-snowflake",source:"@site/blog/openlineage-snowflake/index.mdx",title:"Data Lineage with Snowflake",description:"The OpenLineage Adapter offers Snowflake's enterprise users a powerful tool for analyzing their pipelines.",date:"2022-04-27T00:00:00.000Z",formattedDate:"April 27, 2022",tags:[],readingTime:8.06,hasTruncateMarker:!0,authors:[{name:"Michael Robinson",title:"OpenLineage Community Manager",url:"https://github.com/merobi-hub",imageURL:"https://github.com/merobi-hub.png",key:"Robinson"}],frontMatter:{title:"Data Lineage with Snowflake",date:"2022-04-27T00:00:00.000Z",authors:["Robinson"],description:"The OpenLineage Adapter offers Snowflake's enterprise users a powerful tool for analyzing their pipelines."},prevItem:{title:"Microsoft Purview Accelerates Lineage Extraction from Azure Databricks",permalink:"/blog/openlineage-microsoft-purview"},nextItem:{title:"OpenLineage Support in Egeria",permalink:"/blog/openlineage-egeria"}},s={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Background",id:"background",level:2},{value:"Approach",id:"approach",level:2},{value:"A DAG-based Solution",id:"a-dag-based-solution",level:2},{value:"Getting Started with an Example",id:"getting-started-with-an-example",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installing Marquez",id:"installing-marquez",level:4},{value:"Preparing Snowflake",id:"preparing-snowflake",level:4},{value:"Preparing the Environment",id:"preparing-the-environment",level:3},{value:"Preparing Airflow",id:"preparing-airflow",level:3},{value:"Running the Example",id:"running-the-example",level:3},{value:"Result",id:"result",level:3},{value:"Potential Improvements",id:"potential-improvements",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p};function d(e){let{components:n,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The OpenLineage Adapter offers Snowflake's enterprise users a powerful tool for analyzing their pipelines."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"We are excited to reveal a new way to gather lineage metadata directly from Snowflake: the OpenLineage Adapter. This integration offers Snowflake\u2019s enterprise users a powerful tool for analyzing and diagnosing issues with their data pipelines."),(0,i.kt)("p",null,"This new integration will add new diagnostic capability to one of the world\u2019s largest data platforms. Snowflake\u2019s Data Cloud currently empowers more than 5,900 companies, including 241 of the Fortune 500 as of January 2022, to unite siloed data, securely share data, and execute diverse analytic workloads across their organizations. Legacy platforms struggled to provide a single, secure, and universally accessible platform for organizations to warehouse and analyze their data, but Snowflake\u2019s Data Cloud provides a global ecosystem where customers, providers, and partners can finally break down data silos and derive value from rapidly growing data sets in secure, compliant, and governed ways."),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,"An open source ",(0,i.kt)("a",{parentName:"p",href:"https://lfaidata.foundation/projects/openlineage"},"LF AI & Data Foundation")," sandbox project, OpenLineage provides an open standard for metadata and lineage collection that instruments jobs as they are running. OpenLineage not only automates the process of generating lineage and metadata about datasets, jobs, and runs in a data flow, but also does this in real time behind the scenes. With OpenLineage\u2019s open standard and extensible backend, users can easily identify the root causes of slow or failing jobs and issues with data quality in their ecosystems without parsing queries. The magic of OpenLineage is its standard API for capturing lineage events. Any number of tools \u2013 from schedulers to SQL engines \u2013 can send metadata from this endpoint to a compatible tool such as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MarquezProject/marquez"},"Marquez")," for visualization and further analysis of a pipeline."),(0,i.kt)("p",null,"Historically, the process of producing lineage and collecting metadata has been laborious and error-prone. Extracting data from query logs via parsing, for example, required one to reimplement database parsing logic, which added complexity and introduced opportunities for user error. In addition, the lineage collected was incomplete. One could learn about the view that was queried but not about the underlying tables in the pipeline, much less about the upstream and downstream dependencies of the datasets. OpenLineage, by contrast, exploits what the database already knows and does to maintain an up-to-date, end-to-end graph of a pipeline \u2013 and makes the graph available via an API.     "),(0,i.kt)("p",null,"OpenLineage and Snowflake play nicely because the latter is unusual among cloud data platforms for offering lineage information out of the box in a view (",(0,i.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/sql-reference/account-usage/access_history.html"},"ACCESS_HISTORY"),"). The integration of OpenLineage builds on this foundation to offer automated generation of lineage and metadata."),(0,i.kt)("p",null,"The value proposition of Snowflake + OpenLineage lies in the combination of an open standard tool, which supports multiple data systems to provide lineage in a single format, to Snowflake\u2019s existing production of lineage information on an enterprise scale. The integration gives customers the ability to consume enterprise-wide table lineage and process lineage together in a consolidated OpenLineage format. "),(0,i.kt)("h2",{id:"approach"},"Approach"),(0,i.kt)("p",null,"The process of integrating OpenLineage benefited from an existing query logging tool already available to Snowflake enterprise customers: the ",(0,i.kt)("inlineCode",{parentName:"p"},"ACCESS_HISTORY")," view. As its name suggests, this feature, designed initially for governance use cases, offers users a detailed view of read operations conducted on Snowflake objects (e.g., tables, views, and columns) on an on-demand basis in response to SQL queries. (Write operations are viewable as a preview feature.)"),(0,i.kt)("p",null,"As developed primarily by former Snowflake intern Aly Hirani with support from Datakin Senior Engineer Minkyu Park, the OpenLineage integration makes Access History the basis of automated production of lineage and metadata. But rather than produce a view for querying, OpenLineage produces a holistic lineage graph. To create the graph, the integration takes the data used to populate the Access History view and sends it to the OpenLineage backend as a standard OpenLineage event. Events in OpenLineage are JSON objects that employ a consistent naming strategy for database entities and enrich those entities with facets:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "eventType": "COMPLETE",\n    "eventTime": "2020-12-28T20:52:00.001+10:00",\n    "run": {\n        "runId": "d46e465b-d358-4d32-83d4-df660ff614dd"\n    },\n    "job": {\n        "namespace": "my-namespace",\n        "name": "my-job"\n    },\n    "outputs": [{\n        "namespace": "my-namespace",\n        "name": "my-output",\n        "facets": {\n        "schema": {\n            "_producer": "https://github.com/OpenLineage/OpenLineage/blob/v1-0-0/client",\n            "_schemaURL": "https://github.com/OpenLineage/OpenLineage/blob/v1-0-0/spec/OpenLineage.json#/definitions/SchemaDatasetFacet",\n            "fields": [\n            { "name": "a", "type": "VARCHAR"},\n            { "name": "b", "type": "VARCHAR"}\n            ]\n        }\n        }\n    }],    \n    "producer": "https://github.com/OpenLineage/OpenLineage/blob/v1-0-0/client"\n}\n')),(0,i.kt)("h2",{id:"a-dag-based-solution"},"A DAG-based Solution"),(0,i.kt)("p",null,"Automating lineage production from the Access History view required a two-DAG solution. Minkyu had initially planned to use one DAG to scan the view and produce the lineage graph, but the timing of the logs used for the view precluded the production of lineage data with a single DAG. The solution Minkyu found was a separate DAG with a schedule for scanning the Access History view on a regular interval."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"def send_ol_events():\n   client = OpenLineageClient.from_environment()\n\n   with connect(user=SNOWFLAKE_USER,\n                password=SNOWFLAKE_PASSWORD,\n                account=SNOWFLAKE_ACCOUNT,\n                database='OPENLINEAGE',\n                schema='PUBLIC') as conn:\n       with conn.cursor() as cursor:\n           ol_view = 'OPENLINEAGE_ACCESS_HISTORY'\n           ol_event_time_tag = 'OL_LATEST_EVENT_TIME'\n\n           var_query = f'''\n               set current_organization='{SNOWFLAKE_ACCOUNT}';\n           '''\n\n           cursor.execute(var_query)\n\n           ol_query = f'''\n               SELECT * FROM {ol_view}\n               WHERE EVENT:eventTime > system$get_tag('{ol_event_time_tag}', '{ol_view}', 'table')\n               ORDER BY EVENT:eventTime ASC;\n           '''\n\n           cursor.execute(ol_query)\n           ol_events = [json.loads(ol_event[0]) for ol_event in cursor.fetchall()]\n\n           for ol_event in ol_events:\n               client.emit(ol_event)\n\n           if len(ol_events) > 0:\n               latest_event_time = ol_events[-1]['eventTime']\n               cursor.execute(f'''\n                   ALTER VIEW {ol_view} SET TAG {ol_event_time_tag} = '{latest_event_time}';\n               ''')\n\ndefault_args = {\n   'owner': 'openlineage',\n   'depends_on_past': False,\n   'start_date': days_ago(1),\n   'email_on_failure': False,\n   'email_on_retry': False,\n   'email': ['demo@openlineage.io'],\n   'snowflake_conn_id': 'openlineage_snowflake'\n}\n\nwith DAG('etl_openlineage',\n    schedule_interval='@hourly',\n    catchup=False,\n    default_args=default_args,\n    description='Send OL events every minutes',\n    tags=[\"extract\"]) as dag:\n        t1 = PythonOperator(task_id='ol_event', python_callable=send_ol_events)\n")),(0,i.kt)("h2",{id:"getting-started-with-an-example"},"Getting Started with an Example"),(0,i.kt)("p",null,"This example uses Airflow to run a collection of Snowflake queries for a fictional food delivery service. Lineage data for these queries will be recorded within Snowflake ",(0,i.kt)("inlineCode",{parentName:"p"},"ACCESS_HISTORY")," and, using the OpenLineage Access History View, emitted to an OpenLineage backend."),(0,i.kt)("p",null,"This is done using a series of DAGs in ",(0,i.kt)("inlineCode",{parentName:"p"},"dags/etl")," that each use SnowflakeOperator to run queries, along with a DAG in ",(0,i.kt)("inlineCode",{parentName:"p"},"dags/lineage")," that uses PythonOperator to send generated OpenLineage events to the configured backend."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("h4",{id:"installing-marquez"},"Installing Marquez"),(0,i.kt)("p",null,"First, checkout the Marquez repository:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"% git clone https://github.com/MarquezProject/marquez.git\n% cd marquez\n")),(0,i.kt)("p",null,"Then, run Marquez in detached mode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"% docker/up.sh -d\n%\n")),(0,i.kt)("h4",{id:"preparing-snowflake"},"Preparing Snowflake"),(0,i.kt)("p",null,"First, check out the OpenLineage Access History View repository:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"% git clone https://github.com/Snowflake-Labs/OpenLineage-AccessHistory-Setup.git\n% cd OpenLineage-AccessHistory-Setup\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"OPENLINEAGE")," database and ",(0,i.kt)("inlineCode",{parentName:"p"},"FOOD_DELIVERY")," schema in Snowflake need to be created. This can be done using the SnowSQL command-line tool, or by pasting the queries into a new Snowflake Worksheet. This example uses SnowSQL."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"% snowsql -u <snowflake-user> -a <snowflake-account>\nSnowSQL> CREATE DATABASE OPENLINEAGE;\nSnowSQL> CREATE SCHEMA OPENLINEAGE.FOOD_DELIVERY;\n")),(0,i.kt)("p",null,"The view defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"open_lineage_access_history.sql")," also needs to be created. This view represents the entries in ",(0,i.kt)("inlineCode",{parentName:"p"},"ACCESS_HISTORY")," as specially-constructed JSON objects containing RunEvents that can be emitted to an OpenLineage backend. To create it, use SnowSQL to set the current_organization session variable and execute the SQL file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SnowSQL> SET current_organization='<snowflake-organization>';\nSnowSQL> USE SCHEMA OPENLINEAGE.PUBLIC;\nSnowSQL> !source open_lineage_access_history.sql\n")),(0,i.kt)("p",null,"Finally, our lineage extraction DAG relies upon a tag on the view to keep track of which lineage events have been processed. This tag needs to be initialized:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SnowSQL> CREATE TAG OL_LATEST_EVENT_TIME;\nSnowSQL> ALTER VIEW OPENLINEAGE.PUBLIC.OPENLINEAGE_ACCESS_HISTORY SET TAG OL_LATEST_EVENT_TIME = '1970-01-01T00:00:00.000';\nSnowSQL> !quit\n%\n")),(0,i.kt)("h3",{id:"preparing-the-environment"},"Preparing the Environment"),(0,i.kt)("p",null,"The following environment variables need to be set in order for the query DAGs to connect to Snowflake, and so that the extraction DAG can send lineage events to your OpenLineage backend:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SNOWFLAKE_USER"),(0,i.kt)("li",{parentName:"ul"},"SNOWFLAKE_PASSWORD"),(0,i.kt)("li",{parentName:"ul"},"SNOWFLAKE_ACCOUNT"),(0,i.kt)("li",{parentName:"ul"},"OPENLINEAGE_URL"),(0,i.kt)("li",{parentName:"ul"},"AIRFLOW_CONN_OPENLINEAGE_SNOWFLAKE")),(0,i.kt)("p",null,"To do this, copy the ",(0,i.kt)("inlineCode",{parentName:"p"},".env-example")," file to ",(0,i.kt)("inlineCode",{parentName:"p"},".env"),", and edit it to provide the appropriate values for your environment. The variables in this file will be set for each service in the Airflow deployment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"% cd examples/airflow\n% cp .env-example .env\n% vi .env\n")),(0,i.kt)("h3",{id:"preparing-airflow"},"Preparing Airflow"),(0,i.kt)("p",null,"Once the environment is prepared, initialize Airflow with docker-compose:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"% docker-compose up airflow-init\n")),(0,i.kt)("p",null,"This will take several minutes. When it has finished, bring up the Airflow services:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"% docker-compose up\n")),(0,i.kt)("p",null,"This will also take several minutes. Eventually, the webserver will be up at ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080"),". Log in using the default credentials (airflow/airflow) and navigate to the DAGs page. When you see 12 DAGs in the list, you can be confident that Airflow has completed its initialization of the example."),(0,i.kt)("h3",{id:"running-the-example"},"Running the Example"),(0,i.kt)("p",null,"Each of the DAGs is paused by default. Enable each one, skipping the ",(0,i.kt)("inlineCode",{parentName:"p"},"etl_openlineage")," DAG for now. They may not all run successfully on the first try, since they have interdependencies that this example leaves unmanaged."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Airflow DAG list",src:t(1201).Z,width:"2674",height:"1404"})),(0,i.kt)("p",null,"After each DAG has completed at least one successful run, enable ",(0,i.kt)("inlineCode",{parentName:"p"},"etl_openlineage"),". Wait for it to complete its run."),(0,i.kt)("h3",{id:"result"},"Result"),(0,i.kt)("p",null,"Navigate to your Marquez deployment and view the resulting lineage graph:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Lineage graph",src:t(9942).Z,width:"1328",height:"682"})),(0,i.kt)("h2",{id:"potential-improvements"},"Potential Improvements"),(0,i.kt)("p",null,"This new integration paves the way for an exciting set of potential future capabilities. These include support for ",(0,i.kt)("inlineCode",{parentName:"p"},"Object_Dependencies")," and the addition of Granular Lineage (column-level lineage). We are interested in feedback from users, which will help the team at Snowflake and the members of the OpenLineage community prioritize future work."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Snowflake\u2019s integration of the OpenLineage standard promises to dramatically improve enterprise users\u2019 ability to diagnose issues with quality and performance in their pipelines. This project is cause for optimism about future collaboration with OpenLineage. The fit between Snowflake\u2019s enterprise product and OpenLineage is already fairly seamless. Further collaboration would likely yield additional features and, by extension, more value for Snowflake\u2019s customers. Also, the fact that OpenLineage is an open standard offers opportunities for fruitful integrations with other partners. Supporters of OpenLineage already include Spark, Airflow, and dbt, and the list is growing. For more information or to contribute to OpenLineage, reach out on ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/OpenLineage/"},"twitter")," or ",(0,i.kt)("a",{parentName:"p",href:"https://join.slack.com/t/openlineage/shared_invite/zt-oko79982-4bHHhxTUDQ9KXgQWXyWVxg"},"Slack"),", and check out the repositories on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/"},"Github"),"."))}d.isMDXComponent=!0},1201:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/snowflake-airflow-example-e7bd5af6f0f7db54096dd1c996e06a67.png"},9942:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/snowflake-openlineage-example-8802743d7b8dd89e7d0b711e64308bb9.png"}}]);