import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
type BreadCrumbsType = {
  primaryLabel: string;
  secondaryLabel?: string;
  secondaryLink?: string;
};
function AdminLayoutBreadCrumbs({
  primaryLabel,
  secondaryLabel,
  secondaryLink,
}: BreadCrumbsType) {
  return (
    <Breadcrumb className="mb-3 sm:hidden">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {secondaryLabel && secondaryLink && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href={secondaryLink}>
                {secondaryLabel}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
        <BreadcrumbItem>
          <BreadcrumbPage>{primaryLabel}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default AdminLayoutBreadCrumbs;
