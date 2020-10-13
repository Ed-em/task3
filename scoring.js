// After loading the DOM, execute the processing in function()
$(document).ready(function(){
// Create a logic that gets the input values of [Japanese score, English score, math score, science score, social score] and gives the total score and average score.
  function score_indicate(){
    // In the variable "subject_points"
      // Substitute the array of [Japanese score, English score, math score, science score, social score].
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    // In the variable "sum"
    // Add [Japanese score, English score, math score, science score, social score] respectively.
    // Hint! Take out the arrays one by one and add them.
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    // another way to calculate sum is as follows:
    // let sum =subject_points. the reduce(function( sum, subject_points) {return sum + subject_points;}, 0);
    // Output the variable "sum" (total score) to "total score:" (id = "sum_indicate").
    $("#sum_indicate").text(sum);
    // In the variable "average"
    // Calculate the average value and substitute. (Total score of the number you want to average (sum) / Total number)
    let average = sum / subject_points.length;
    $("#average_indicate").text(average);
    // Hint! Use the length method to find the total number. (length method: Method to get the length of the string, the number of elements in the array, etc.)
  };
  // Get the average score and create the logic to rank ("A", "B", "C", "D") from the obtained average score.
  function get_achievement(subject_points){
    // In the variable "averageIndicate"
    // Get the average score from id = "average_indicate" on HTML and substitute it.
    let averageIndicate = $("#average_indicate").text();
    console.log(averageIndicate)
    // If "averageIndicate" is 80 or higher, "A" is returned.
    if ( averageIndicate >= 80){
      return "A";
      // If "averageIndicate" is 60 or more, "B" is returned.
    } else if ( averageIndicate >= 60) {
      return "B";
      // If "averageIndicate" is 40 or more, "C" is returned.
    } else if ( averageIndicate >= 40) {
      return "C";
    // If "averageIndicate" is any other score, "D" is returned.
    } else {
      return "D";
    }
  };
  // Get the score of each subject and make the logic to judge pass / fail from the obtained score.
  function get_pass_or_failure(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
  // Substitute the number of subjects entered in the variable "number".
    let number = subject_points.length;
    // Assign "pass" to the variable "judge".
    let judge = "pass";
    // If the score of each subject entered is lower than 60 points, "Judge" is reassigned to the variable "judge" and "judge" is returned.
    // Hint! Try searching for "javascript score pass / fail logic".
    for (let i=0; i<number; i++){
        if (subject_points[i]<60){
          judge = "Fail" ;
           break ;
        }
    }
        return judge;
    //return pass_or_failure;
};
  // Create the final judge logic.
  function judgement(){
    // Assign "return value of get_achievement ()" to the variable "achievement".
    let achievement = get_achievement();
  // Substitute "return value of get_pass_or_failure ()" for variable "pass_or_failure".
    let pass_or_failure = get_pass_or_failure();
  // When you press the "Final Judge" (id = "alert-indicate)" button, "Your grade is $ {achievement} and $ {pass_or_failure}" is output.
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info"> Your grade is ${achievement}. It is a ${pass_or_failure}</label>`);
};
  // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]のいずれかの点数が変更された際に「function score_indicate()」を発火させる処理です。
  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });
  // 「ランク」(class="evaluation")ボタンを押したら「get_achievement()」が出力される処理です。
  $('#btn-evaluation').click(function() {
    $("#evaluation").text(get_achievement());
  });
  // 「判定」(class="btn-judge")ボタンを押したら「function et_pass_or_failure()」が出力される処理です。
    $('#btn-judge').click(function() {
    $("#judge").text(get_pass_or_failure());
  });
  // 「最終ジャッジ」(class="btn-declaration")ボタンを押したら「function judgement()」が出力される処理です。
  $('#btn-declaration').click(function() {
    $("#declaration").text(judgement());
  });
});
// ここに書かれているjsの記述はあくまでヒントとして用意された雛形なので、書かれている記述に従わずに実装したいという場合は、自分の好きに実装して構わない。課題要件を満たし、コードの品質が一定の水準にあると判定されればどのような実装でも合格になる。
// 例ではJavaScriptとjQueryの両方の記述を使用しているが、どちらかに統一しても構いません。
