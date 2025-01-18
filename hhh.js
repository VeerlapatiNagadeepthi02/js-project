for(i=1;i<=10;i++){
    if(i==1  || i==2){
        print(i,"prime number")
    }
    else{
        count=0
        for(j=2;j<=i;j++):
            if(i%j==0){
                count++
            }
        if(count==0){
            print(+i,"prime")
        }
    }
}