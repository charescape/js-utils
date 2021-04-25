import type * as Swal_T from "sweetalert2";

declare const Swal: typeof Swal_T.default;

export function swalToast(config: Swal_T.SweetAlertOptions) {
  config = {
    // title: "...",
    // icon: "success",
    toast: true,
    showConfirmButton: false,
    timer: 3000,

    ...config
  };

  return Swal.fire(config);
}

export function swalToastSuccess(config: Swal_T.SweetAlertOptions) {
  config.icon = "success";

  return swalToast(config);
}

export function swalAlert(config: Swal_T.SweetAlertOptions) {
  config = {
    // html: `<p>...</p>`,
    // confirmButtonText: 'Close',
    width: 500,
    iconHtml: '<i class="bi bi-exclamation-circle text-primary"></i>',
    customClass: {
      icon: 'border-0 mt-0 mb-3',
      confirmButton: 'btn btn-primary px-4 py-2',
    },
    showClass: {
      popup: 'animate__animated animate__fadeInUp animate__faster',
      backdrop: 'swal2-backdrop-show',
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutDown animate__faster',
      backdrop: 'swal2-backdrop-hide',
    },

    ...config
  };

  return Swal.fire(config);
}
