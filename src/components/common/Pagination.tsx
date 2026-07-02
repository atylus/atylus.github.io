import Link from "next/link";
import type { PaginationProps } from "@/types/common";

export type { PaginationProps } from "@/types/common";

function buildPageHref(basePath: string, page: number): string {
  if (page <= 1) return basePath;
  const separator = basePath.includes("?") ? "&" : "?";
  return `${basePath}${separator}page=${page}`;
}

export default function Pagination({
  totalPages,
  currentPage = 1,
  basePath,
  ulClassName = "pagination",
  nextLabel = "Next",
}: PaginationProps) {
  if (totalPages < 1) return null;

  const hasNext = currentPage < totalPages;
  const nextPage = currentPage + 1;

  return (
    <nav aria-label="Page navigation example">
      <ul className={ulClassName}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (page, index) => {
            const isActive = page === currentPage;
            const href = buildPageHref(basePath, page);
            const isFirst = index === 0;

            return (
              <li
                key={page}
                className={`page-item${isFirst ? " m-0" : ""}${isActive ? " active" : ""}`}
              >
                <Link
                  href={href}
                  className={`page-link${isActive ? " active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {page}
                </Link>
              </li>
            );
          },
        )}
        <li className="page-item">
          {hasNext ? (
            <Link
              href={buildPageHref(basePath, nextPage)}
              className="page-link v1"
            >
              {nextLabel}
              <i className="icon-arrow-top" />
            </Link>
          ) : (
            <span className="page-link v1" aria-disabled="true">
              {nextLabel}
              <i className="icon-arrow-top" />
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
}
