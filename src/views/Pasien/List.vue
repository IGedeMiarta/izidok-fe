<template>
  <div>
    <page-title
      heading="Manajemen Pasien"
      :breadcrumb="[
        {
          label: 'Manajemen Pasien'
        },
        {
          label: 'List Pasien',
          active: true
        }
      ]"
    />

    <div class="container">
      <div class="card card-box mb-3 ninja-shadow">
        <div class="card-header">
          <div class="card-header--title">
          	<h3>Manajemen Pasien</h3>
             <!--  <small>Custom</small>
              <b>Example widget with table inside.</b> -->
          </div>
        </div>
        <div class="card-body">
      		<div class="row no-padding">
	        	<div class="col-md-9 no-padding">
	            <div class="form-group col-md-5" style="float:left;">
	              <label for="inputEmail4">Nama Pasien</label>
	              <input type="email" class="form-control" id="inputEmail4">
	            </div>
	            <div class="form-group col-md-4" style="float:left;">
	              <label for="inputPassword46">No. Rekam Medik</label>
	              <input type="password" class="form-control" id="inputPassword46">
	            </div>
	            <div class="form-group col-md-3" style="float:left;padding-top:30px;padding-left:0;">
	              <b-button variant="primary">CARI</b-button>
	            </div>
	        	</div>
	        	<div class="col-md-3 no-padding">
	            <div class="form-group col-md-12" style="padding-top:30px;padding-left:0;">
	              <b-button variant="first" style="float:right;">TAMBAH</b-button>
	            </div>
	        	</div>
      		</div>
        	<div class="col-md-12 no-padding">
		        <table class="table table-bordered table-hover table-hover mb-5">
	            <thead>
		            <tr>
	                <th>Name</th>
	                <th>Position</th>
	                <th>Office</th>
	                <th>Age</th>
	                <th>Start date</th>
	                <th class="no-sort text-center">Actions</th>
		            </tr>
	            </thead>
	            <tbody>
		            <tr>
	                <td>Tiger Nixon</td>
	                <td>System Architect</td>
	                <td>Edinburgh</td>
	                <td>61</td>
	                <td>2011/04/25</td>
	                <td class="text-center">
	                  <a href="javascript:void(0)" class="btn bg-kuning font-size-md pl-2 pr-2 btn-sm ml-1 mr-1" title="View details">
	                  	<font-awesome-icon icon="pencil-alt"/>
	                  </a>
	                  <a href="javascript:void(0)" class="btn bg-danger font-size-md pl-2 pr-2 btn-sm ml-1 mr-1" title="View details">
	                  	<font-awesome-icon icon="trash-alt"/>
	                  </a>
	                  <a href="javascript:void(0)" class="btn bg-first font-size-md pl-2 pr-2 btn-sm ml-1 mr-1" title="View details">
	                    <font-awesome-icon icon="search"/>
	                  </a>
	                  <!-- <div class="bg-kuning text-white font-size-md mb-2 mx-auto d-40 rounded">
	                  </div>
	                  <div class="bg-danger text-white font-size-md mb-2 mx-auto d-40 rounded">
	                    <font-awesome-icon icon="trash-alt"/>
	                  </div>
	                  <div class="bg-first text-white font-size-md mb-2 mx-auto d-40 rounded">
	                    <font-awesome-icon icon="search"/>
	                  </div> -->
	                </td>
		            </tr>
	            </tbody>
		        </table>
        	</div>
        </div>
      </div>
      <div class="col-md-12 bg-neutral-second ninja-shadow" style="border-radius:10px;">
        <div class="p-3">
          <ul class="pagination justify-content-center mb-0">
            <li class="page-item">
              <a class="page-link" href="javascript:void(0)" aria-label="Previous">
                <font-awesome-icon icon="chevron-left"/>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="javascript:void(0)">1</a></li>
            <li class="page-item active"><a class="page-link" href="javascript:void(0)">2</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0)" aria-label="Next">
                <font-awesome-icon icon="chevron-right"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {library} from '@fortawesome/fontawesome-svg-core'
  import {
      faArrowRight,
      faArrowUp,
      faBinoculars,
      faTrashAlt,
      faSearch,
      faPencilAlt,
      faChevronLeft,
      faChevronRight
  } from '@fortawesome/free-solid-svg-icons'

  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

  library.add(
      faArrowRight,
      faArrowUp,
      faBinoculars,
      faTrashAlt,
      faSearch,
      faPencilAlt,
      faChevronLeft,
      faChevronRight
  );

	export default {
	  components: {
	      'font-awesome-icon': FontAwesomeIcon,
	  },
	};
</script>
<style scoped lang="css">
	.bg-kuning{
		background:#F7FC6B;
	}
	.bg-kuning, .bg-danger, .bg-first{
		color:black !important;
	}
	.no-padding{
		padding:0 !important;
	}
	.page-item.active a{
		background:#3B86FF;
		border:none !important;
	}
	.ninja-shadow{
		box-shadow: 0px 8px 15px 0px lightgrey;
	}
</style>