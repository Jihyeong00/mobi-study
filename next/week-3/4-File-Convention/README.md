## Next-JS의 파일 컨벤션

### pageRouter와 next13 이후의 appRouter의 차이

1. 기존에는 사용하지 않았던 파일명들이 추가되었습니다. (error, page, not-found, route, layout...)
2. SSR과 SSG를 위한 fetch option이 추가되었습니다. route의 동작방식을 [관리하는 방법이 추가](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config)되었습니다.
3. app router로 바뀌면서 지원되지 않는 파일들이 존재합니다.
4. 그 외 기존에 사용하던 방식과 자잘하게 바뀐 방식들이 존재합니다.

> ex: Pages Router에서는 next/router로부터 useRouter를 가져와서 사용했지만, App Router에서는 next/navigation으로부터 useRouter를 가져와야 합니다.

### appRouter에서 지원하는 File Convention

https://nextjs.org/docs/app/api-reference/file-conventions

### 참고자료

[[Next JS] Pages Router 에서 App Router 전환기](https://www.timegambit.com/blog/blog-log/app-router#%EC%9D%B4-%EA%B8%80%EC%9D%84-%EC%93%B0%EA%B2%8C-%EB%90%9C-%EA%B3%84%EA%B8%B0)

[공식 문서 - 파일 컨벤션](https://nextjs.org/docs/app/api-reference/file-conventions)

[공식 문서 - 세그먼트 구성](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config)
