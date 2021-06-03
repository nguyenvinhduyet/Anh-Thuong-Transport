      <el-input
        placeholder="Ngày"
        v-model="date">
      </el-input>
    
      <!-- <el-input
        placeholder="Thứ"
        v-model="day">
      </el-input> -->
      <el-select v-model="day" placeholder="Thứ">
         <el-option
          v-for="item in days"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-select v-model="licensePlate" placeholder="Biển số">
         <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-input
        placeholder="Tên khách"
        v-model="name"
      >
      </el-input>

      <!-- <el-autocomplete
        class="inline-input"
        v-model="name"
        :fetch-suggestions="querySearch"
        placeholder="Tên khách"
        @select="handleSelect"
      ></el-autocomplete> -->

      
      <el-input
        placeholder="Nơi đi"
        v-model="from"
        >
      </el-input>

      <el-input
        placeholder="Nơi đến"
        v-model="to"
        >
      </el-input>

      <el-input
        type="number"
        placeholder="Chuyến"
        v-model="trip"
        >
      </el-input>


      <el-input
        placeholder="Tấn"
        type="number"
        v-model="ton"
        >
      </el-input>

      <el-input
        placeholder="Đơn giá"
        type="number"
        v-model="unitPrice"
        >
      </el-input>

      <el-input
        placeholder="Phí"
        type="number"
        v-model="extraCost"
        >
      </el-input>

      <el-input
        placeholder="Dầu"
        type="number"
        v-model="oil"
        >
      </el-input>

      <el-input
        type="number"
        placeholder="Số Km"
        v-model="kilometer"
        >
      </el-input>

      <el-input
        type="number"
        placeholder="Công an"
        v-model="police"
        >
      </el-input>

      <el-input
        type="number"
        placeholder="Thành tiền"
        v-model="total"
        >
      </el-input>

      <el-input
        type="number"
        placeholder="Lương"
        v-model="salary"
        >
      </el-input>

      <el-input
        placeholder="Tài xế"
        v-model="driver"
        type="text"
        >
      </el-input>

      <el-button type="success" icon="el-icon-check" @click="createEmployee(date, day, licensePlate, name, from, to , kilometer, trip, ton, unitPrice, extraCost, oil, police, total, salary, driver)"> Add </el-button>
      

      <el-button round slot="reference" type="success" icon="el-icon-edit">Create Itinerary</el-button
      >