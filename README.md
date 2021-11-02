# Learn ReactJS 🎉

> Every theory ever: [theory.md](theory.md)

## Folder structure

```
src
|__ components (shared components between features)
|  |__ Loading
|     |__ index.tsx
|     |__ styles.scss
|
|__ features
|  |__ Todo
|     |__ components (components of feature Todo)
|     |__ pages (pages of feature Todo)
|     |__ index.tsx (entry point of feature Todo)
|
|__ App.tsx
```

## 📰 Form module

- 1 dự án có rất nhiều form
- Mỗi form đều xử lí những vấn đề như: default values, submit form, validation, form errors, ...

--> Không có cách quản lý sẽ dẫn đến việc lặp đi lặp lại những vấn đề trên rất nhiều

> Solution

![form](https://user-images.githubusercontent.com/90959206/138994205-f042fc25-6327-419b-aa93-2098a79454e0.png)

```
src
|__ components
|  |__ FormFields (base controls)
|     |__ InputField.tsx
|     |__ PasswordField.tsx
|     |__ ...
|
|__ features
|  |__ Todo
|     |__ components
|     |  |__ TodoForm (form component)
|     |
|     |__ pages
|        |__ ListPage (page/container)
|
|__ App.tsx
```

## 📰 API module

**Why**

Thiết lập một `HTTP client` và đảm bảo tất cả các `HTTP requests, response` đều phải đi qua nó, nhằm mục đích xử lý những tác vụ chung như:

- Thêm common headers: content-type,...
- Attach thêm token và xử lý expired token
- Xử lý lỗi chung

**How**

![api](https://kctrnn.vercel.app/assets/images/api-module-9ca34b1789d62ac4a31759bc7f0872b8.png)

```
src
|__ api
| |__ axiosClient.js : http client for our website
| |__ productApi.js : all apis of product resources
| |__ categoryApi.js
| |__ userApi.js
| |__ ...
|
|__ components
|__ features
|__ ...
|__ App.js
```

## Built with

- UI: `Material UI`, `SCSS`
- Routing: `react-router-dom`
- Form management: `react-hook-form`
- Form validation: `yup`
- HTTP client: `axios`
