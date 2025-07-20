---
title: Coldstarts and Cloudflare Workers
description: How Cloudflare Workers eliminate cold starts for serverless applications.
date: 2022-05-22
---

# Solving cold starts with Cloudflare Workers

Did this post load fast? 🚀 This is in no small part because the content was delivered to your browser using Cloudflare's Workers. Workers provides a high performance global network with a 0ms cold-start time.

## Serverless today

Cloud providers can allocate machine resources on demand, scaling automatically to the requirements of your business. Two fundamental technologies make this possible today: virtualization, and containerization.

> Virtualization is the process of running a virtual instance of a computer system in a layer abstracted from the actual hardware. Most commonly, it refers to running > multiple operating systems on a computer system simultaneously.

opensource.com - https://opensource.com/resources/virtualization

> Containerization is the packaging of software code with just the operating system libraries and dependencies required to run the code to create a single lightweight executable.

IBM - https://www.ibm.com/cloud/learn/containerization

Whether it’s Amazon’s ECS or Lambda, Google’s Cloud Run or Cloud Functions, or any of the other modern offerings – services are built on these two fundamental concepts.

Code deployed as containers to these cloud services becomes a small independent workload that can be passed around and run on different hardware. For all intents and purposes this works really well, but providers make a trade-off between keeping your workload ‘hot’ (ready to accept requests) and the cost of occupying infrastructure.

Typically you can take over the trade-off with controls given to you from the provider, but you will need to decide: low cost with longer initial start times, or hot and ready with a higher cost. Businesses generally accept the cost associated with always having a workload running to eliminate the 'cold start', especially when the workload has to load a user experience like a web application.

## Lambda cold starts

My team at ASICS Apps struggled with this very problem last year when experimenting with Next.js and AWS Lambda. We were attracted to the atomic nature, and billing per execution time. Using the custom server feature of Next.js, our demo projects looked very promising, and didn’t require a large time investment from our infrastructure team. Unfortunately we couldn't find a reliable solution to bring down cold requests consistently under three seconds, unacceptable for business requirements and set standards. This is especially the case when a lambda is delivering a visual interactive experience. I'm unsure I would recommend Lambda to serve a modern application experience like with Next.js, but can definitely see value for background tasks, or service to service cron workloads.

In the end, we chose AWS Elastic Container Service configured to guarantee a hot workload (never shutting off). Meaning we have accepted the cost of running a container every minute of every day to guarantee an instance response to user requests. Can we do better?

## Cloudflare Workers

Faced with recent problems with Lambda at work, and not wanting to pay monthly to run this simple blog, Cloudflare Workers was the perfect solution.

You can think of Workers as a giant web browser running in the cloud. When a request is handled by Workers it’s akin to opening another tab. This comparison works well as a mental model because the Workers runtime uses the V8 engine — the same engine used by Chromium and Node.js. Instead of needing to package code in a container, you only need to adapt the worker syntax for application entry points. Unlike your web browser, the code is executed inside the server environment allowing your application access to privileged secrets, rendering content server-side, or completing costly calculations.

This blog is built with the latest version of Nuxt, an opinionated hybrid Vue framework that delivers high quality web experiences. With Cloudflare Workers I no longer worry about choosing between cold starts or paying a premium in addition to containerizing my application. This blog is now instantly available anywhere in the world, with very low latency and no cold starts.

## Comparison: AWS Lambda vs ECS vs Cloudflare Workers


| Feature                | AWS Lambda                | Cloudflare Workers           |
|-----------------------|---------------------------|------------------------------|
| **Cold Start**        | Yes (can be several sec)  | No (0ms, always ready)       |
| **Pricing Model**     | Per execution time        | Per request, generous free   |
| **Deployment**        | Package as zip/container  | JavaScript/Worker script     |
| **Scalability**       | Automatic, event-driven   | Automatic, edge network      |
| **Latency**           | Variable, cold start risk | Very low, global edge        |
| **Limitations**       | Cold starts, memory/time  | Runtime limits, JS only      |

This table highlights the main differences between AWS Lambda and Cloudflare Workers. Cloudflare Workers stands out for its instant availability and global reach, making it ideal for web applications and APIs that require low latency and no cold starts.

## Conclusion

In summary, Cloudflare Workers offer a compelling solution for developers seeking instant, global availability and minimal latency for their web applications. By eliminating cold starts and simplifying deployment, Workers empower teams to deliver fast, reliable experiences to users worldwide. If you’re building modern web apps or APIs, it’s worth considering Cloudflare Workers for your next project.

---

Interested in how this blog is built? Check out the source on [GitHub](https://github.com/jvanst/nuxt4-blog).

