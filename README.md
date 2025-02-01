# Next.js 13 App Router: Unexpected getServerSideProps and getStaticPaths Behavior

This repository demonstrates an unexpected behavior when combining `getServerSideProps` and `getStaticPaths` in a Next.js 13 App Router page.  The issue involves the execution order and data fetching inconsistencies.

## Bug Description

When `getServerSideProps` is used with `getStaticPaths`, the `getServerSideProps` function is not consistently called, leading to unpredictable data fetching results.  This is particularly noticeable when the page is initially rendered and subsequently navigated to via client-side routing.

## Reproduction Steps

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Run the development server: `npm run dev`.
4. Navigate to the `/` page.
5. Observe the console logs to see the inconsistent behavior of `getServerSideProps`.
6. Try navigating to another page and then back to `/` to reproduce the issue.

## Expected Behavior

`getServerSideProps` should be called every time the page is requested, regardless of how the request is initiated (initial load or client-side navigation).

## Actual Behavior

`getServerSideProps` is sometimes called, and sometimes not, producing inconsistent results. The `getStaticPaths` function is being called, and the data is being passed properly, but the getServerSideProps functions is not being called again unless the page is refreshed.

## Solution

The solution may involve restructuring the code to avoid using `getServerSideProps` in conjunction with `getStaticPaths` in the App directory, or exploring alternative approaches to data fetching within the Next.js App Router.  The specific solution will depend on the intended functionality and the nature of the data being fetched.

This issue highlights a potential edge case or unexpected behavior in the Next.js 13 App Router's data fetching mechanisms.