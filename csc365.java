public class csc365{

  /*
  Code for removing Entry from the table
  */
  public void remove(String key){
    int h = key.hashCode();
    Entry[] t = tab;
    int i = h & (t.length -1);
    Entry head = null;
    Entry p = t[i];
    while(p != null){
      if(p.hashCode() == h && key.equals(p.key)){
        if(head == null){
          t[i] = p.next;
        }else{
          head.next = p.next;
        }
        --count;
        //Something goes here
      }
      head = p;
      p = p.next;
    }
  }
}

02-07 21:12:51.575 11574-11574/com.example.brendan.csc365_assignment_1 I/System.out: 197.12
02-07 21:12:51.575 11574-11574/com.example.brendan.csc365_assignment_1 I/System.out: 56.058823
02-07 21:12:51.575 11574-11574/com.example.brendan.csc365_assignment_1 I/System.out: 38.0
02-07 21:12:51.575 11574-11574/com.example.brendan.csc365_assignment_1 I/System.out: 0.0
02-07 21:12:51.575 11574-11574/com.example.brendan.csc365_assignment_1 I/System.out: 163.12
02-07 21:12:51.575 11574-11574/com.example.brendan.csc365_assignment_1 I/System.out: 0.0
02-07 21:12:51.575 11574-11574/com.example.brendan.csc365_assignment_1 I/System.out: 1.0
02-07 21:12:51.575 11574-11574/com.example.brendan.csc365_assignment_1 I/System.out: 0.0
02-07 21:12:51.575 11574-11574/com.example.brendan.csc365_assignment_1 I/System.out: 36.7
02-07 21:12:51.575 11574-11574/com.example.brendan.csc365_assignment_1 I/System.out: 10.875


02-07 21:26:26.283 19926-19926/com.example.brendan.csc365_assignment_1 I/System.out: FIPS:56: 8.733334
02-07 21:26:26.283 19926-19926/com.example.brendan.csc365_assignment_1 I/System.out: FIPS ID: FIPS:56PRCP: 8.733334
02-07 21:26:26.339 19926-19926/com.example.brendan.csc365_assignment_1 I/System.out: PRCP FOR Wyoming is 8.733334
